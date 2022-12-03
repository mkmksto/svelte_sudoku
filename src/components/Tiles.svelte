<script>
    import { tileState } from '../stores/tileStateStore'
    export let realValue
    // export let idx
    export let coord
    export let userInputValue
    // export let isValidvalue
    // export let isReplaceable
    export let isActive
    export let isUserInput

    function tileClick(coord, isClickedTileActive) {
        clearPreviousActiveTiles()

        tileState.update((prevState) => {
            const tileToActivate = prevState.find(
                (tileObj) => tileObj.coord === coord
            )

            // if already active, deactivate
            if (isClickedTileActive) {
                tileToActivate.isActiveTile = false
            } else {
                tileToActivate.isActiveTile = true
            }

            return prevState
        })
    }

    function clearPreviousActiveTiles() {
        tileState.update((prevState) => {
            prevState.forEach((tileObj) => {
                tileObj.isActiveTile = false
            })
            return prevState
        })
    }
</script>

<div
    class="tile"
    class:active-tile={isActive}
    class:user-input={isUserInput}
    on:click={() => tileClick(coord, isActive)}
>
    {userInputValue}
</div>

<style>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        color: rgb(90, 90, 90);
        width: 50px;
        height: 50px;
        border: 0.3px solid rgba(200, 200, 200);
        transition: background-color 0.2s ease;
    }

    .active-tile {
        background-color: rgb(180, 180, 180);
    }

    .user-input {
        color: rgb(0, 107, 238);
    }
</style>
