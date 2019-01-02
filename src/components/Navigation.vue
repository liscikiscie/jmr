<template>
    <header>
        <section>
            <div class="nav">
                <ul class="nav-list">
                    <li>
                        <router-link to="about">ABOUT</router-link>
                    </li>
                    <li>
                        <router-link to="offer">OFFER</router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img class="logo-icon" src="../assets/raspberryIcon.png" alt="raspberry kingdom icon">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="gallery">GALLERY</router-link>
                    </li>
                    <li>
                        <router-link to="contact">CONTACT</router-link>
                    </li>
                </ul>
            </div>
        </section>
    </header>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style scoped lang="scss">
    .nav {
        .nav-list {
            display: flex;
            justify-content: space-around;
            padding-top: 23px;

            li {
                height: 36px;
                display: flex;
                align-items: center;

                a {
                    font-size: $mainFontSize;
                    color: $mainFontColor;
                    text-decoration: none;
                }
            }

            .logo-icon {
                height: 45px;
                width: 36px;
                transform: rotate(22deg);
            }
        }
    }

</style>
