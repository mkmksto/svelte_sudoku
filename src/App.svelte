<script>
    import Board from './components/Board.svelte'
    import Header from './components/Header.svelte'
    import Keypad from './components/Keypad.svelte'
</script>

<main>
    <Header />
    <div class="container">
        <Board />
        <Keypad />
    </div>
</main>

<style>
    main {
        height: 100vh;
        background-color: rgb(253, 253, 253);
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
