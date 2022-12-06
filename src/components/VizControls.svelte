<script>
    import { animationSpeed } from '../stores/animationSpecs'
    import { tileState } from '../stores/tileStateStore'

    function clearBoard() {
        $tileState.forEach((tileObj) => {
            if (tileObj.isReplaceable) {
                tileObj.userInputValue = ''
                tileObj.isValidValue = false
            }
        })
        $tileState = $tileState
    }
</script>

<!-- Pause/Play button
Speec control
Option to Slow down when backtracking -->

<div class="viz-controls">
    <div class="slider-cont">
        <label for="speed-slider">Speed</label>
        <input
            type="range"
            min="10"
            max="700"
            id="speed-slider"
            step="10"
            bind:value={$animationSpeed}
        />
        <span class="slider-val">{$animationSpeed}ms</span>
    </div>
    <button class="btn solve" on:click>Solve</button>
    <button class="btn clear" on:click={clearBoard}>Clear</button>
</div>

<style>
    .viz-controls {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 1rem;
    }

    .slider-cont {
        display: flex;
        align-items: center;
    }

    .slider-cont label {
        margin-right: 1rem;
        color: var(--font-color);
    }

    #speed-slider {
        margin-right: 0.6rem;
        -webkit-appearance: none;
        height: 0.4rem;
        background-color: rgb(230, 230, 230);
        border-radius: 5px;
    }

    .slider-val {
        color: var(--font-color);
    }

    input[type='range']::-webkit-slider-thumb,
    #speed-slider::-moz-range-thumb {
        -webkit-appearance: none;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        border: none;
        background-color: var(--main-color);
    }

    .btn {
        background-color: var(--main-color);
        color: white;
        padding: 0.4rem 0.8rem;
    }

    .solve {
        margin-right: 1rem;
        margin-left: auto;
    }
</style>
