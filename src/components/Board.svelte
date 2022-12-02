<script>
    import Tiles from './Tiles.svelte'

    let numTiles = 81
</script>

<div class="board">
    {#each Array(numTiles) as _}
        <Tiles />
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
