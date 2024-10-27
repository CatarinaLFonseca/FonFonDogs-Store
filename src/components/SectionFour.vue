
<template>
    <div id="bodyFour">
        <header>
            <img :src="'/images/HeaderExp.svg'" alt="img Experiences" id="realImg">
        </header>
        <section>
            <div id="alignSection">
                <div class="circle">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <ul>
                    <li v-for="(comment, index) in comments" :key="index">
                        <img :src="comment.picture" alt="picture persona" id="picture" class="imgCard">
                        <img :src="comment.stars" alt="stars picture" class="imgCard">
                        <h1>{{ comment.name }}</h1>
                        <p>{{ comment.comment }}</p>
                    </li>
                </ul>
                <ButtonGradient title="Show more"/>
            </div>
            <img :src="'/images/Paws.svg'" alt="Paws" id="paws">
        </section>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import ButtonGradient from './ButtonGradient.vue';

const comments = ref([
   {
      picture: '/images/People1.svg',
      stars: '/images/StarPeople1.svg',
      name: 'Wade Warren',
      comment: "The quality of this dog clothing is incredible. It's comfortable and durable, ensuring your pet stays stylish and cozy!"
   },
   {
      picture: '/images/People2.svg',
      stars: '/images/StarPeople2.svg',
      name: 'Elias Watsica',
      comment: "I'm impressed with the perfect fit and softness of this product – my dog loves wearing it and looks super stylish!"
   },
   {
      picture: '/images/People3.svg',
      stars: '/images/StarPeople3.svg',
      name: 'Theresa Conroy',
      comment: "This dog apparel combines style and functionality perfectly, providing both comfort and charm!"
   },
   {
      picture: '/images/People4.svg',
      stars: '/images/StarPeople4.svg',
      name: 'Nicole Champlin',
      comment: "The outfit is so well-made and comfortable that my dog doesn't want to take it off – definitely an excellent purchase!"
   }
]);
</script>
    
<style scoped>
    #bodyFour {
        background: linear-gradient(to bottom, #FFCCFC 40%, #FFF5FF);
        min-height: 100dvh; 
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    header {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
    section {
        min-height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 2;
        margin-bottom: 20px;
    }

    #alignSection {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        position: relative;
        justify-items: center;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }
    
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 242px;
        height: 340px;
        background-color: #fff5ffdb;
        border-radius: 10px;
        border: 1px solid #af00a9;
        box-shadow: 1px 10px 10px 1px rgb(0 0 0 / 11%);
        gap: 10px;
        padding: 6px;
    }

    h1 {
        font-family: "Inter", Medium;
        font-size: 24px;
        font-weight: 600;
        color: black;
        text-align: center;
    }

    p {
        font-family: "Inter", Regular;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        color: #6b6b6b;
    }

    #paws {
        position: absolute;
        left: 1px;
        bottom: 10px;
    }

    .circle {
        position: absolute;
    }

    .circle1 {
        width: 126px;
        height: 126px;
        border-radius: 50%;
        background-color: #ad00bd36;
        border: 1px solid #f042ff0f;
        box-shadow: 0px 0px 20px #f042ff91;
        position: absolute;
        bottom: 280px;
        right: 685px;
    }

    .circle2 {
        width: 268px;
        height: 268px;
        border-radius: 50%;
        border: 1px solid #0014c817;
        box-shadow: 0 0 10px #0014c87d;
        background-color: #0014c826;
        position: absolute;
        left: 615px;
        top: -70px;
    }

    .circle3 {
        width: 190px;
        height: 190px;
        border-radius: 50%;
        background-color: #62005f40;
        border: 1px solid #62005f17;
        box-shadow: 0 0 10px #62005fa1;
        position: absolute;
        top: 327px;
        right: 250px;
    }
    
    .circle4 {
        width: 118px;
        height: 118px;
        border-radius: 50%;
        background-color: #ff426542;
        border: 1px solid #ff426514;
        box-shadow: 0 0 10px #ff426587;
        position: absolute;
        top: 434px;
        left: 320px;
    }

@media screen and (max-width: 1845px) {
    .circle1 {
        bottom: 415px;
        right: 480px;
    }
    .circle2 {
        left: 385px;
        top: -215px;
    }
    .circle3 {
        right: 285px;
    }
    .circle4 {
        top: 360px;
        left: 120px;
    }
}
@media screen and (max-width: 1500px) {
    .circle1 {
        right: 355px;
    }
    .circle2 {
        left: 175px;
    }
    #paws {
        width: 110px;
    }
}
@media screen and (max-width: 1370px) {
    .circle1 {
        display: none;
    }
    .circle2 {
        display: none;
    }
    .circle3 {
        display: none;
    }
    .circle4 {
        display: none;
    }
    #alignSection {
        gap: 50px;
    }
    #paws {
        width: 87px;
    }
}
@media screen and (max-width: 1250px) {
    #realImg {
        width: 480px;
    }
    .circle3 {
        top: 275px;
        right: 190px;
    }
    #paws {
        width: 85px;
    }
}
@media screen and (max-width: 1180px) {
    ul {
        grid-template-columns: repeat(2, 1fr);
    }
    .circle3 {
        top: 275px;
        right: 190px;
    }
    #paws {
        width: 85px;
    }
}

@media screen and (max-width: 1045px) {
    #realImg {
        width: 460px;
    }
}
@media screen and (max-width: 990px) {
    .circle2 {
        width: 220px;
        height: 220px;
        left: 85px;
    }
    .circle3 {
        width: 180px;
        height: 180px;
        right: 135px;
        top: 250px;
    }
    #paws {
        width: 60px;
    }
}
@media screen and (max-width: 895px) {
    .circle1 {
        right: -15px;
    }
    .circle2 {
        width: 200px;
        height: 200px;
        left: 40px;
        top: -20px;
    }
    .circle3 {
        right: 55px;
    }
    .circle4 {
        top: 520px;
    }
    .buttonOne {
        display: none;
    }
    #paws {
        width: 90px;
    }
    
}
@media screen and (max-width: 695px) {
    #realImg {
        width: 360px;
    }
}
@media screen and (max-width: 650px) {
    ul {
        grid-template-columns: repeat(1, 1fr);
    }

    .imgCard {
        width: 70px;
    }

    h1 {
        font-size: 17px;
    }
    p {
        font-size: 12px;
    }
    li {
        width: 180px;
    }

    .circle2 {
        width: 150px;
        height: 150px;
        left: -40px;
        top: -20px;
    }
    .circle3 {
        right: 58px;
        width: 130px;
        height: 130px;
    }
    .circle4 {
        left: 60px;
    }
    li {
        width: 170px;
        height: 260px;
    }
    #paws {
        width: 55px;
    }
}
@media screen and (max-width: 400px) {
    .circle2 {
        display: none;
    }
    .circle3 {
        display: none;
    }
    .circle4 {
        display: none;
    }
    li {
        width: 170px;
        height: 255px;
        margin: 7px;
    }
}
</style>
    