<template>
    <div id="bodyThree">
        <section>
            <div class="textContainer">
                <div class="textTitle">
                    <h2>Didn't find what you were looking for?</h2>
                    <h1><span class="gradient">No problem</span>, we'll sew one for you!</h1>
                </div>
                <p>Send us your dog's measurements and the desired models, and we'll provide a special quote for you!</p>
            </div>
            <div class="buttons">
                <button-gradient title="Our Services" />
                <button-link color-props="black" />
            </div>
            <img :src="handleImages('/src/assets/images/Blue-circle-one.svg')" alt="first circle" id="firstCircle">
            <img :src="handleImages('/src/assets/images/Blue-circle-two.svg')" alt="second circle" id="secondCircle">
            <img :src="handleImages('/src/assets/images/Blue-circle-three.svg')" alt="third circle" id="thirdCircle">
            <img :src="handleImages('/src/assets/images/Yellow-circle-one.svg')" alt="fourth circle" id="fourthCircle">
            <img :src="handleImages('/src/assets/images/Yellow-circle-two.svg')" alt="fifth circle" id="fifthCircle">
        </section>
    </div>
</template>
    
<script setup>
    import ButtonGradient from './ButtonGradient.vue';
    import ButtonLink from './ButtonLink.vue'
    import { handleImages } from '@/utils';
</script>
    
<style scoped>
    #bodyThree {
        background: linear-gradient(to bottom, #fff5fff2 15%, #FFCCFC);
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100dvh;
    }

    section {
        height: 100dvh;
        padding: 120px 200px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        position: relative;
    }

    #sectionAlign {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .textContainer {
        max-width: 516px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    h2 {
        color: #000000;
        font-family: 'Inter', Regular;
        font-size: 52px;
        font-weight: 400;
    }

    h1 {
        font-family: 'Inter', Medium;
        font-size: 52px;
        font-weight: 500;
        color: #000000;
    }

    p {
        font-family: "Inter", Regular;
        font-weight: 400;
        font-size: 17px;
        color: #6b6b6b;
        width: 100%;
        height: 56px;
    }
    
    .gradient {
        display: inline;
        background: linear-gradient(to right, #FD7452 50%, #FF4265 100%, transparent 100%);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    #imgCircle {
        position: absolute;
    }

    #firstCircle {
        position: absolute;
        top: 50px;
        right: 650px;
    }

    #secondCircle {
        position: absolute;
        top: 580px;
        right: 780px;
    }

    #thirdCircle {
        position: absolute;
        bottom: 150px;
        right: 0;
    }

    #fourthCircle {
        position: absolute;
        top: 400px;
        right: 300px;
    }

    #fifthCircle {
        position: absolute;
        top: 130px;
        right: 0;
    }


    @media screen and (max-width: 1640px) {
        #firstCircle {
            display: none;
        }
    }

    @media screen and (max-width: 1340px) {
        #secondCircle, #thirdCircle, #fourthCircle, #fifthCircle  {
            display: none;
        }

        section {
            padding: 0;
            align-items: center;
            justify-content: center;
        }

        .textContainer {
            max-width: 600px;
        }
    }

    @media screen and (max-width: 600px) {
        h2 {
            font-size: 42px;
        }

        h1 {
            font-size: 44px;
        }
        
        section {
            padding-inline: 20px;
            align-items: start;
        }

        .textContainer {
            max-width: 100%;
        }
    }

</style>
    