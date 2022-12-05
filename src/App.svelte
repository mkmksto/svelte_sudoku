<script>
    import Board from './components/Board.svelte'
    import Header from './components/Header.svelte'
    import Keypad from './components/Keypad.svelte'
    import VizInfo from './components/VizInfo.svelte'
</script>

<main>
    <Header />
    <div class="container">
        <VizInfo />
        <Board />
        <Keypad />
    </div>
</main>

<style>
    :root {
        --main-color: rgb(223, 35, 136);
    }

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
