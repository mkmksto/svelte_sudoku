<script>
    import { onMount } from 'svelte'
    import { tileState } from '../stores/tileStateStore'
    import {
        delRandElements,
        initObjectArray,
        isInputValid,
    } from '../utils/arrayManipulation'
    import { validKeys } from '../utils/keyboardUtils'
    import { samples } from '../utils/sampleProblems'
    import Tiles from './Tiles.svelte'

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

    function updateTileVal(e) {
        if (!validKeys.includes(e.key)) return

        const activeTile = getActiveTile()
        if (!activeTile) return
        if (!isTileReplaceable(activeTile)) return

        // validate first before assigning the user input to the tile
        // this makes things easier to validate
        // because IisInputValido take into account things like
        // comparing the value to itself
        // console.log(isInputValid($tileState, activeTile, e.key))
        activeTile.isValidValue = isInputValid($tileState, activeTile, e.key)
        activeTile.userInputValue = e.key
        activeTile.isUserInput = true

        $tileState = $tileState
    }
</script>

<svelte:window
    on:keydown={(e) => {
        updateTileVal(e)
    }}
/>

<div class="board">
    {#each $tileState as { coord, realValue, isActiveTile, userInputValue, isUserInput, isReplaceable, isValidValue } (coord)}
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

<style>
    .board {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(9, 1fr);
        width: 540px;
        height: 540px;
        box-shadow: 0 0 13px rgba(0, 0, 0, 0.1);
    }
</style>
