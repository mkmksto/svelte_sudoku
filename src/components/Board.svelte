<script>
    import { onMount } from 'svelte'
    import { tileState } from '../stores/tileStateStore'
    import {
        delRandElements,
        initObjectArray,
    } from '../utils/arrayManipulation'
    import { sample1 } from '../utils/sampleProblems'
    import Tiles from './Tiles.svelte'

    // $tileState = initializeObjectArray()

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
        let newSample = delRandElements(sample1, 61)

        tileState.update((prevState) => {
            prevState.forEach((tileObj, idx) => {
                tileObj.realValue = sample1[idx]
                if (newSample[idx] != 'x') {
                    tileObj.userInputValue = sample1[idx]
                    tileObj.isReplaceable = false
                    tileObj.isValidValue = true
                } else {
                    tileObj.userInputValue = ''
                    tileObj.isReplaceable = true
                    tileObj.isValidValue = false
                }
            })

            return prevState
        })
    }
</script>

<div class="board">
    {#each $tileState as { coord, realValue, isActiveTile, userInputValue } (coord)}
        <Tiles
            {realValue}
            {coord}
            {userInputValue}
            bind:isActive={isActiveTile}
        />
    {/each}
</div>

<style>
    .board {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(9, 1fr);
        width: 450px;
        height: 450px;
    }
</style>
