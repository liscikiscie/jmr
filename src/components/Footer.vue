<template>
    <footer>
        <section>
            <div class="footer__wrapper">
                <div class="footer__copyrights">
                    {{ copyrights }}
                </div>
                <div class="footer__privacy-policy">
                    <ul>
                        <li>{{ cookies }}</li>
                        |
                        <li>{{ privacy }}</li>
                    </ul>
                </div>
                <div class="footer__project-author">
                    Design by <span class="author">{{ projectAuthor }}</span>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                copyrights: 'Ⓒ 2014 RASPBERRY KINGDOM',
                cookies: 'Cookies',
                privacy: 'Privacy',
                projectAuthor: 'Wizard of Oz'
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer__wrapper {
        height: 49px;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        opacity: .46;
        background-color: $backgroundColor;

        .footer__copyrights {
            color: $secondaryFontColor;
            font-size: 10px;
        }

        .footer__privacy-policy {
            color: $secondaryFontColor;
            font-size: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .footer__project-author {
            color: $secondaryFontColor;
            font-size: 10px;

            .author {
                color: $mainFontColor;
            }
        }
    }

</style>
