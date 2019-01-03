<template>
    <main>
        <section>
            <div class="main__container">
                <EnterTheGates @openModal="toggle"/>
            </div>
            <div class="footer__container">
                <Footer/>
            </div>
            <LogInPupUp v-if="logInPopUp"
                        @closeModal="toggle"/>
        </section>
    </main>
</template>

<script>
    import EnterTheGates from '@/components/EnterTheGates';
    import Footer from '@/components/Footer';
    import LogInPupUp from '@/components/LogInPupUp';

    export default {
        name: 'Home',
        data() {
            return {
                logInPopUp: false
            }
        },
        components: {
            LogInPupUp,
            Footer,
            EnterTheGates
        },
        methods: {
            toggle() {
                this.logInPopUp = !this.logInPopUp;
            }
        }
    }
</script>

<style scoped lang="scss">
    .main__container {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (min-width: $mobileSmallLandscape) {
            margin-top: 50px;
        }

        @media only screen and (min-width: $mobileMidLandscape) {
            margin-top: 250px;
        }

        @media only screen and (min-width: $smallDesktop) {
            margin-top: 140px;
        }

        @media only screen and (min-width: $desktop) {
            margin-top: 300px;
        }

    }

    .footer__container {
        position: fixed;
        bottom: 0;
    }

</style>
