<script>
    import { onMount } from 'svelte'
    import { tileState } from '../stores/tileStateStore'
    import { initObjectArray } from '../utils/arrayManipulation'
    import { validKeys } from '../utils/keyboardUtils'
    import { puzzles } from '../utils/sampleProblems'
    import { getPossibleValues, isCompleteAndValidSolution } from '../utils/solver'
    import { isInputValid } from '../utils/validityChecker'
    import Tiles from './Tiles.svelte'
    import VizControls from './VizControls.svelte'

    // !TODO: ask if i should move initstore outside onMount
    onMount(() => {
        initializeStore()
        populateTileStore()
    })

    function initializeStore() {
        tileState.update((prevState) => {
            return initObjectArray()
        })
    }

    function populateTileStore() {
        // const curSample = samples[4]
        // const shownSample = delRandElements(curSample, 61)
        const curSample = puzzles[2]

        tileState.update((prevState) => {
            prevState.forEach((tileObj, idx) => {
                tileObj.realValue = curSample[idx]

                // values removed from original puzzle
                // if (shownSample[idx] != 'x') {
                if (curSample[idx] != '0') {
                    tileObj.userInputValue = curSample[idx]
                    tileObj.isReplaceable = false
                    tileObj.isValidValue = true
                } else {
                    // initial values shown to user
                    tileObj.userInputValue = ''
                    tileObj.isReplaceable = true
                    tileObj.isValidValue = false
                }
            })

            return prevState
        })
    }

    function getActiveTile() {
        return $tileState.find((tile) => {
            return tile.isActiveTile
        })
    }

    function isTileReplaceable(tile) {
        return tile.isReplaceable
    }

    function clearTile(tileObj) {
        tileObj.isValidValue = false
        tileObj.userInputValue = ''
        tileObj.isReplaceable = true
        $tileState = $tileState
    }

    function updateTileVal(tileObj, newVal) {
        // validate first before assigning the user input to the tile
        // this makes things easier to validate
        // because IisInputValido take into account things like
        // comparing the value to itself
        // console.log(isInputValid($tileState, activeTile, e.key))
        tileObj.isValidValue = isInputValid($tileState, tileObj, newVal)
        tileObj.userInputValue = newVal
        tileObj.isUserInput = true

        $tileState = $tileState
    }

    function range(size, start = 1) {
        return [...Array(size).keys()].map((i) => i + start)
    }

    function sleep(ms) {
        return new Promise((res, rej) => {
            setTimeout(res, ms)
        })
    }

    async function solve(grid, row, col) {
        if (col >= 9) {
            if (row >= 8) {
                return true
            }
            row++
            col = 0
        }

        const curTile = $tileState.find((tileObj) => tileObj.coord === `${row}-${col}`)
        // if tile is already populated, move to next tile
        if (curTile.userInputValue) {
            console.log(curTile)
            return solve(grid, row, col + 1)
        }

        for (let n of range(9, 1)) {
            if (isInputValid($tileState, curTile, n.toString())) {
                // console.log(n + ' is valid for: ' + curTile.coord)
                curTile.userInputValue = `${n}`
                $tileState = $tileState
                await sleep(20)

                if (solve(grid, row, col + 1)) {
                    // $tileState = $tileState
                    return true
                }
            } else {
                curTile.userInputValue = ''
                $tileState = $tileState
            }
        }

        console.log('unsolvable')
        return false
    }

    function solve2() {
        // Check if the current puzzle configuration is a complete and valid solution
        if (isCompleteAndValidSolution($tileState)) {
            // If it is, we're done!
            console.log('Solution found!')
            return true
        }

        // Find the empty tile with the fewest possible values
        let minTile = null
        let minPossibleValues = 10
        for (const tile of $tileState) {
            if (!tile.userInputValue) {
                const possibleValues = getPossibleValues(tile)
                if (possibleValues.length < minPossibleValues) {
                    minTile = tile
                    minPossibleValues = possibleValues.length
                }
            }
        }

        // Try each of the possible values for the empty tile with the fewest possible values
        const possibleValues = getPossibleValues(minTile)
        for (const value of possibleValues) {
            // Try placing the value on the tile
            updateTileVal(minTile, value)

            // If the value is valid, recursively search for a solution
            if (solve2()) {
                // If a solution is found, we're done!
                return true
            } else {
                // If a solution is not found, clear the tile and try the next value
                clearTile(minTile)
            }
        }

        // If we reach this point, no solution was found
        return false
    }
</script>

<svelte:window
    on:keydown={(e) => {
        const keyPress = e.key
        const activeTile = getActiveTile()
        if (!activeTile) return
        if (!validKeys.includes(keyPress)) return
        if (keyPress === 'Delete') {
            clearTile(activeTile)
            return
        }
        if (!isTileReplaceable(activeTile)) return

        updateTileVal(activeTile, keyPress)
    }}
/>

<div class="board">
    {#each $tileState as { coord, isActiveTile, userInputValue, isUserInput, isReplaceable, isValidValue } (coord)}
        <Tiles
            {coord}
            {userInputValue}
            {isUserInput}
            {isReplaceable}
            {isValidValue}
            bind:isActive={isActiveTile}
        />
    {/each}
</div>

<VizControls on:click={() => solve($tileState, 0, 0)} />

<style>
    .board {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(9, 1fr);
        width: 540px;
        height: 540px;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 0 13px rgba(0, 0, 0, 0.1);
    }
</style>
