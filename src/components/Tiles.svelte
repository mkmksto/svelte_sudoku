<script>
    import { tileState } from '../stores/tileStateStore'

    export let realValue
    export let coord
    export let userInputValue
    export let isValidValue
    export let isReplaceable
    export let isActive
    export let isUserInput

    function tileClick(coord, isClickedTileActive) {
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

    function clearPreviousActiveTiles(coord) {
        tileState.update((prevState) => {
            prevState.forEach((tileObj) => {
                if (tileObj.coord !== coord) {
                    tileObj.isActiveTile = false
                }
            })
            return prevState
        })
    }
</script>

<div
    class="tile"
    class:active-tile={isActive}
    class:user-input={isUserInput}
    class:replaceable-tile={isReplaceable}
    class:non-replaceable-tile={!isReplaceable}
    class:invalid-tile={!isValidValue}
    on:click={() => {
        clearPreviousActiveTiles(coord)
        tileClick(coord, isActive)
    }}
>
    {userInputValue}
</div>

<style>
    :root {
        --default-border: 0.1px solid rgba(200, 200, 200, 0.3);
        --three-by-three: 3px solid rgba(170, 170, 170, 0.35);
    }

    .tile {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.7rem;
        color: rgb(90, 90, 90);
        width: 60px;
        height: 60px;
        border: var(--default-border);
        user-select: none;
        opacity: 0.85;
        transition: background-color 0.2s ease;
    }

    .tile:nth-of-type(3n) {
        border-right: var(--three-by-three);
    }

    /* remove right-border included in 9th item from the above selector */
    .tile:nth-of-type(9n) {
        border-right: var(--default-border);
    }

    /* styling bottom border of rows */
    .tile:nth-of-type(n + 19):not(.tile:nth-of-type(n + 28)) {
        border-bottom: var(--three-by-three);
    }

    .tile:nth-of-type(n + 46):not(.tile:nth-of-type(n + 55)) {
        border-bottom: var(--three-by-three);
    }

    .active-tile {
        background-color: rgba(100, 100, 100, 0.2);
    }

    .replaceable-tile {
        cursor: pointer;
    }

    .non-replaceable-tile {
        background-color: white;
    }

    .user-input {
        color: rgb(0, 107, 238);
    }

    .invalid-tile {
        color: red;
    }
</style>
