<template>
    <div id="bodyThree">
        <section>
            <div id="sectionAlign">
                <h2>Didn't find what you were looking for?</h2>
                <h1><span class="gradient">No problem</span>, we'll sew one for you!</h1>
                <p>Send us your dog's measurements and the desired models, and we'll provide a special quote for you!</p>
            </div>
            <div class="buttons">
                <button-gradient title="Our Services" />
                <button-link color-props="black" />
            </div>
        </section>
        <div id="imgCircle">
            <img :src="handleImages('/src/assets/images/Blue-circle-one.svg')" alt="first circle" id="firstCircle">
            <img :src="handleImages('/src/assets/images/Blue-circle-two.svg')" alt="second circle" id="secondCircle">
            <img :src="handleImages('/src/assets/images/Blue-circle-three.svg')" alt="third circle" id="thirdCircle">
            <img :src="handleImages('/src/assets/images/Yellow-circle-one.svg')" alt="fourth circle" id="fourthCircle">
            <img :src="handleImages('/src/assets/images/Yellow-circle-two.svg')" alt="fifth circle" id="fifthCircle">
        </div>
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
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;        
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10%;
        height: 50%;
    }

    #sectionAlign {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 516px;
        height: 338px;
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
        width: 496px;
        height: 56px;
        margin-top: 7%;
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
        margin-top: 5%;
    }

    #imgCircle {
        position: absolute;
        right: 5px;
    }

    #firstCircle {
        position: absolute;
        bottom: 145px;
        right: 675px;
    }

    #secondCircle {
        position: absolute;
        right: 830px;
        top: 80px;
    }

    #thirdCircle {
        position: absolute;
        right: 0px;
        top: 260px;
    }

    #fourthCircle {
        position: absolute;
        right: 386px;
        top: 1px;
    }

    #fifthCircle {
        position: absolute;
        right: 0px;
        bottom: 57px;
    }

@media screen and (max-width: 1750px) {
    #firstCircle {
        bottom: 98px;
        right: 500px;
        width: 215px;
    }
    #secondCircle {
        right: 490px;
        top: 95px;
        width: 265px;
    }
    #thirdCircle {
        right: 60px;
        top: 143px;
    }
    #fourthCircle {
        right: 280px;
        top: -40px;
        width: 208px;
    }
    #fifthCircle {
        right: 95px;
        bottom: 57px;
    }
}
@media screen and (max-width: 1370px) {
    #bodyThree {
        align-items: center;
    }
    #firstCircle {
        bottom: 60px;
        right: 1010px;
        width: 200px;
    }
    #secondCircle {
        display: none;
    }
    #thirdCircle {
        top: 88px;
        right: 95px;
    }
    #fourthCircle {
        right: 1060px;
        top: 80px;
        width: 180px;
    }
    #fifthCircle {
        right: 45px;
        bottom: 45px;
        width: 200px;
    }
    section {
        display: flex;
        flex-direction: column;
        margin-left: 0%;
        margin: auto;
        height: 0%; 
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-size: 50px;
    }
    h2 {
        font-size: 49px;
    }
    p {
        font-size: 15px;
    }
}
@media screen and (max-width: 1215px) {
    #bodyThree {
        align-items: center;
    }
    #firstCircle {
        display: none;
    }
    #secondCircle {
        display: none;
    }
    #thirdCircle {
        display: none;
    }
    #fourthCircle {
        display: none;
    }
    #fifthCircle {
        display: none;
    }
    h2 {
        font-size: 45px;
    }
    h1 {
        font-size: 47px;
    }
    p {
        font-size: 15px;
    }
}
@media screen and (max-width: 695px) {
    #sectionAlign {
        width: 310px;
        height: 338px;
    }
    .circle1 {
        right: -100px;
        bottom: 330px;
    }
    h2 {
        font-size: 33px;
    }
    h1 {
        font-size: 34px;
    }
    p {
        width: 310px;
        height: 100px;
        font-size: 10px;
    }
    .buttons {
        width: 267px;
    }
}
</style>
    