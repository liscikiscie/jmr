<template>
    <main>
        <section>
            <div class="main__wrapper">
                <h1 class="header__text">{{ headText }}</h1>
                <div class="main__button--holder"
                     @click="openLoginPopUp">
                    <div class="main__button">
                        {{ logInButton }}
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'EnterTheGates',
        data() {
            return {
                headText: 'Raspberry kingdom',
                logInButton: 'ENTER THE GATES'
            }
        },
        methods: {
            openLoginPopUp() {
                this.$emit('openModal')
            }
        }
    }
</script>

<style scoped lang="scss">
    .main__wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;

        .header__text {
            font-size: 48px;
            font-family: 'Bakery', sans-serif;
            color: $mainFontColor;

            @media only screen and (min-width: $mobileMidLandscape) {
                font-size: 90px;
            }

            @media only screen and (min-width: $smallDesktop) {
                font-size: 120px;
            }
        }

        .main__button--holder {
            margin-top: 39px;
            width: 200px;
            height: 38px;
            border: 1px solid white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 24px;
            cursor: pointer;

            @media only screen and (min-width: $mobileMidLandscape) {
                margin-top: 49px;
                width: 265px;
                height: 48px;
                border: 2px solid white;
            }

            .main__button {
                color: $mainFontColor;
                font-size: $secondaryFontSize;

                @media only screen and (min-width: $mobileMidLandscape) {
                    font-size: $mainFontSize;
                }
            }
        }
    }

</style>
