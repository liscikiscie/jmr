<template>
    <div id="app">
        <div class="app__container">
            <div class="nav__container">
                <Navigation/>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation';

    export default {
        components: {
            Navigation
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Aleo, sans-serif;
        font-size: $mainFontSize;
        color: $mainFontColor;
    }

    .app__container {
        height: 100vh;
        width: 100vw;
        background-image: url("./assets/raspberry.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        box-shadow: inset 0 300px 240px -10px rgba(0, 0, 0, .48);

        @media only screen and (min-width: $mobileSmallLandscape) {
            box-shadow: inset 0 300px 160px -10px rgba(0, 0, 0, .48);
        }

        @media only screen and (min-width: $mobileMidLandscape) {
            box-shadow: inset 0 300px 320px -10px rgba(0, 0, 0, .48);
        }

        @media only screen and (min-width: $smallDesktop) {
            box-shadow: inset 0 300px 480px -10px rgba(0, 0, 0, .48);
        }

        @media only screen and (min-width: $desktop) {
            box-shadow: inset 0 361px 620px -10px rgba(0, 0, 0, .48);
        }
    }

</style>

