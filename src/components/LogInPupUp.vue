<template>
    <div class="logIn__wrapper">
        <div class="logIn__container">
            <form @submit.prevent
                  class="form__wrapper">
                <h1 class="form__header">Are you a Raspberry Knight?</h1>
                <input v-model.trim="logInForm.email"
                       type="email"
                       placeholder="Email"
                       id="email"/>
                <input v-model.trim="logInForm.password"
                       type="password"
                       placeholder="Password"
                       id="password"/>
                <button class="logIn__button--submit"
                        @click="logIn">
                    LOG IN
                </button>
                <div v-if="this.info !== null"
                     class="response__info">
                    {{this.info}}
                </div>
            </form>
        </div>
        <div class="overlay"
             @click="closeModal"></div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'LogInPupUp',
        data() {
            return {
                logInForm: {
                    email: '',
                    password: ''
                },
                info: null
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeModal')
            },
            logIn() {
                axios
                    .post('https://recruitment-api.pyt1.stg.jmr.pl/login',
                        {
                            'login': this.logInForm.email,
                            'password': this.logInForm.password
                        },
                        {
                            headers: {'Content-Type': 'application/json'}
                        })
                    .then(response => {
                        this.info = response.data.message;
                    })
                    .catch(error => {
                        this.info = error.data.message;
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .logIn__wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;

        .logIn__container {
            height: 240px;
            width: 230px;
            background-color: $popUpBcgColor;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            max-width: 100%;
            max-height: 100%;
            overflow: auto;
            margin: auto;
            z-index: 10;

            @media only screen and (min-width: $mobileMidLandscape) {
                height: 341px;
                width: 366px;
            }

            .form__wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .form__header {
                    font-family: Aleo, sans-serif;
                    margin-top: 15px;
                    color: $thirdFontColor;
                    font-size: $popUpFontSize;

                    @media only screen and (min-width: $mobileMidLandscape) {
                        margin-top: 44px;
                    }
                }

                #email {
                    width: 200px;
                    border: none;
                    border-bottom: 1px solid black;
                    text-align: center;
                    padding: 30px 0 13px 0;
                    font-family: Aleo, sans-serif;
                    font-size: $mainFontSize;

                    @media only screen and (min-width: $mobileMidLandscape) {
                        margin-top: 30px;
                        width: 80%;
                    }
                }

                #password {
                    width: 200px;
                    border: none;
                    border-bottom: 1px solid black;
                    text-align: center;
                    padding: 30px 0 13px 0;
                    font-family: Aleo, sans-serif;
                    font-size: $mainFontSize;

                    @media only screen and (min-width: $mobileMidLandscape) {
                        margin-top: 30px;
                        width: 80%;
                    }
                }

                .logIn__button--submit {
                    margin-top: 15px;
                    width: 200px;
                    height: 32px;
                    background-color: $buttonBcgColor;
                    border-radius: 24px;
                    border: none;

                    @media only screen and (min-width: $mobileMidLandscape) {
                        width: 265px;
                        height: 48px;
                    }
                }

                .response__info {
                    height: 20px;
                    width: 100%;
                    margin-top: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: $thirdFontColor;
                }
            }
        }

        .overlay {
            height: 100vh;
            width: 100vw;
            opacity: .73;
            background-color: $backgroundColor;
        }
    }

</style>
