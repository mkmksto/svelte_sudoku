<script>
    import { onMount } from 'svelte'
    import { tileState } from '../stores/tileStateStore'
    import { delRandElements, initObjectArray, isInputValid } from '../utils/arrayManipulation'
    import { validKeys } from '../utils/keyboardUtils'
    import { samples } from '../utils/sampleProblems'
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
        const curSample = samples[4]
        const shownSample = delRandElements(curSample, 61)

        tileState.update((prevState) => {
            prevState.forEach((tileObj, idx) => {
                tileObj.realValue = curSample[idx]

                // values removed from original puzzle
                if (shownSample[idx] != 'x') {
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

    function clearTile() {
        const activeTile = getActiveTile()
        activeTile.isValidValue = false
        activeTile.userInputValue = ''
        $tileState = $tileState
    }

    function updateTileVal(tileObj, keyPress) {
        // validate first before assigning the user input to the tile
        // this makes things easier to validate
        // because IisInputValido take into account things like
        // comparing the value to itself
        // console.log(isInputValid($tileState, activeTile, e.key))
        tileObj.isValidValue = isInputValid($tileState, tileObj, keyPress)
        tileObj.userInputValue = keyPress
        tileObj.isUserInput = true

        $tileState = $tileState
    }

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                for (let n = 1; n < 10; n++) {
                    const activeTile = $tileState.find(
                        (tileObj) => tileObj.coord === `${row}-${col}`
                    )

                    // skip values already present in the puzzle
                    if (!activeTile.isReplaceable) continue
                    console.log(activeTile)

                    if (isInputValid($tileState, activeTile, n)) {
                        activeTile.userInputValue = `${n}`
                        activeTile.isReplaceable = false
                        $tileState = $tileState
                        // console.log(activeTile)
                    }
                    solve()
                    // else
                    activeTile.userInputValue = ''
                    activeTile.isReplaceable = true
                    $tileState = $tileState
                }
                return
            }
        }
        console.log('done')
    }

    function range(size, start = 1) {
        return [...Array(size).keys()].map((i) => i + start)
    }

    function solve2() {
        let lastValidTile = '0-0'
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                // const hasValidValues = !! range(9).some(num => isInputValid($tileState, ))
                // if ()

                let validValFound = false
                for (let n = 1; n < 10; n++) {
                    const activeTile = $tileState.find(
                        (tileObj) => tileObj.coord === `${row}-${col}`
                    )

                    if (!activeTile.isReplaceable) continue
                    // console.log('row col n', row, col, n)
                    if (isInputValid($tileState, activeTile, n)) {
                        activeTile.userInputValue = `${n}`
                        lastValidTile = activeTile.coord
                        continue
                    }
                }
            }
        }
    }
</script>

<svelte:window
    on:keydown={(e) => {
        const keyPress = e.key
        if (!validKeys.includes(keyPress)) return
        if (keyPress === 'Delete') {
            clearTile()
            return
        }

        const activeTile = getActiveTile()
        if (!activeTile) return
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

<VizControls on:click={solve} />

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
