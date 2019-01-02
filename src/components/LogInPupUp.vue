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
            </form>
        </div>
        <div class="overlay"></div>
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
            logIn() {
                axios
                    .post('https://recruitment-api.pyt1.stg.jmr.pl/login',
                        {
                            // 'login': this.logInForm.email,
                            // 'password': this.logInForm.password
                            'login': 'correct_login@example.com',
                            'password': 'C0rr3Ct_P@55w0rd'

                        },
                        {
                            headers: {'Content-Type': 'application/json'}
                        })
                    .then(response => {
                        console.log(response.data.message);
                        this.info = response;
                    })
                    .catch(error => {
                        console.log(error);
                        this.info = error;
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
            height: 220px;
            width: 220px;
            background-color: $popUpBcgColor;
            position: absolute;
            top: 24%;
            left: 16%;
            z-index: 10;

            .form__wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .form__header {
                    font-family: Aleo, sans-serif;
                    margin-top: 15px;
                }

                #email {
                    width: 200px;
                    border: none;
                    border-bottom: 1px solid black;
                    text-align: center;
                    padding: 30px 0 15px 0;
                    font-family: Aleo, sans-serif;
                    font-size: $mainFontSize;
                }

                #password {
                    width: 200px;
                    border: none;
                    border-bottom: 1px solid black;
                    text-align: center;
                    padding: 30px 0 15px 0;
                    font-family: Aleo, sans-serif;
                    font-size: $mainFontSize;
                }

                .logIn__button--submit {
                    margin-top: 15px;
                    width: 200px;
                    height: 32px;
                    background-color: $buttonBcgColor;
                    border-radius: 24px;
                    border: none;
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
