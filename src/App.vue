<template>
    <div id="app">
        <div class="app__container">
            <div class="nav__container">
                <Navigation/>
                <router-view/>
            </div>
            <div class="main__container">
                <EnterTheGates @openModal="toggle"/>
            </div>
            <div class="footer__container">
                <Footer/>
            </div>
            <LogInPupUp v-if="logInPopUp"
                        @closeModal="toggle"/>
        </div>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation';
    import EnterTheGates from '@/components/EnterTheGates';
    import Footer from '@/components/Footer';
    import LogInPupUp from '@/components/LogInPupUp';

    export default {
        data() {
            return {
                logInPopUp: true
            }
        },
        components: {
            LogInPupUp,
            Footer,
            EnterTheGates,
            Navigation
        },
        methods: {
            toggle() {
                this.logInPopUp = !this.logInPopUp;
            }
        }
    }
</script>

<style lang="scss">
    #app {

    }

    .app__container {
        height: 100vh;
        width: 100vw;
        background-image: url("./assets/raspberry.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;

        .main__container {
            margin-top: 120px;
            display: flex;
            justify-content: center;
            align-items: center;

            @media only screen and (min-width: $mobileSmallLandscape) {
                margin-top: 50px;
            }

            @media only screen and (min-width: $mobileMidLandscape) {
                margin-top: 300px;
            }

            @media only screen and (min-width: $smallDesktop) {
                margin-top: 180px;
            }

            @media only screen and (min-width: $smallDesktop) {
                margin-top: 180px;
            }

            @media only screen and (min-width: $desktop) {
                margin-top: 300px;
            }
        }

        .footer__container {
            position: fixed;
            bottom: 0;
        }
    }

</style>

