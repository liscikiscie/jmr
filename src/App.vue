<template>
    <div id="app">
        <div class="app__container">
            <Navigation/>
            <router-view/>
            <div class="main__container">
                <EnterTheGates @openModal="toggle"/>
            </div>
            <div class="footer__container">
                <Footer/>
            </div>
            <LogInPupUp v-if="logInPopUp"/>
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
                logInPopUp: false
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
        }

        .footer__container {
            position: fixed;
            bottom: 0;
        }
    }

</style>

