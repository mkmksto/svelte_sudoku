<script>
    import { tileState } from '../stores/tileStateStore'
    export let realValue
    // export let idx
    export let coord
    // export let userInputValue
    // export let isValidvalue
    // export let isReplaceable
    export let isActive

    function tileClick(coord, isClickedTileActive) {
        clearPreviousActiveTiles()

        tileState.update((previousStateArr) => {
            const tileToActivate = previousStateArr.find(
                (tileObj) => tileObj.coord === coord
            )

            // if already active, deactivate
            if (isClickedTileActive) {
                tileToActivate.isActiveTile = false
            } else {
                tileToActivate.isActiveTile = true
            }

            return previousStateArr
        })
    }

    function clearPreviousActiveTiles() {
        tileState.update((previousStateArr) => {
            previousStateArr.forEach((tileObj) => {
                tileObj.isActiveTile = false
            })
            return previousStateArr
        })
    }
</script>

<div
    class="tile"
    class:active-tile={isActive}
    on:click={() => tileClick(coord, isActive)}
>
    {realValue}, {coord}, {isActive}
</div>

<style>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
        color: rgb(90, 90, 90);
        width: 50px;
        height: 50px;
        border: 0.3px solid rgba(200, 200, 200);
    }

    .active-tile {
        background-color: rgb(180, 180, 180);
    }
</style>
