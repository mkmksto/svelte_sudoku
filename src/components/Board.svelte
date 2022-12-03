<script>
    import { onMount } from 'svelte'
    import { tileState } from '../stores/tileStateStore'
    import { initObjectArray } from '../utils/arrayManipulation'
    import { sample1 } from '../utils/sampleProblems'
    import Tiles from './Tiles.svelte'

    // $tileState = initializeObjectArray()

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
        tileState.update((previousStateArr) => {
            console.log(previousStateArr)

            const newArr = [...previousStateArr]
            newArr.forEach((tileObj, idx) => {
                tileObj['realValue'] = sample1[idx]
            })

            console.log(newArr)
            return newArr
        })
    }
</script>

<div class="board">
    {#each $tileState as { coord, realValue, isActiveTile } (coord)}
        <Tiles {realValue} {coord} bind:isActive={isActiveTile} />
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
