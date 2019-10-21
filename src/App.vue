<template>
    <div id="app">
        <Nav class="header"/>
        <div class="container">
            <router-view class="main"/>
            <Side class="side"/>
        </div>
        <Footer class="footer"/>
    </div>
</template>

<script>
    import Side from "./components/Side.vue";
    import Nav from "./components/Nav.vue";
    import Footer from "./components/Footer";

    export default {
        name: "app",
        components: {
            Side,
            Nav,
            Footer
        }
    };
</script>

<style scoped>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .header {
        position: fixed;
        width: 100vw;
    }

    .container {
        width: 75vw;
        padding-top: 4em;
        display: flex;
        flex: 1;
        align-items: flex-start;
    }

    @media screen and (max-width: 720px) {
        .container {
            width: 100vw;
        }

        .side {
            display: none;
        }
    }
    .main{
        width: 100%;
    }

    .side {
        position: fixed;
        flex: 0 0 24em;
        right: 0;
    }

</style>
<style>
    a:link {
        color: black;
    }
    a:visited {
        color: black;
    }
    a:hover {
        color: dodgerblue;
    }
    a:active {
        color: dodgerblue;
    }
</style>
