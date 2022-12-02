<script>
    export let tileValue = 9
</script>

<div class="tile">
    {tileValue}
</div>

<style>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        color: rgb(90, 90, 90);
        width: 50px;
        height: 50px;
        border: 0.3px solid rgba(200, 200, 200);
    }
</style>
