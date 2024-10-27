<template>
  <div id="bodyTwo">
    <header>
      <img :src="handleImages('/src/assets/images/HeaderStore.svg')" alt="OurStore" id="OurStore">
    </header>
    <section>
      <!--
            <div class="circle">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
      </div>
      -->
      <div id="gridSection">
        <h1>
          <span class="gradient">Best</span> Seller
        </h1>
        
        <ul>
          <li class="modelsGrid" v-for="(model, index) in modelOfDogs" :key="index">
            <div class="gridPicture">
              <img :src="handleImages(`/src/assets/images/${model.picture}`)" alt="picture dog" id="picture">
              <img :src="handleImages(`/src/assets/images/${model.stars}`)" alt="stars picture" id="stars">
            </div>
              <h2>{{ model.description }}</h2>
              <p>{{ model.price }}</p>
          </li>
        </ul>
        <ButtonGradient title="Show more"/>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ButtonGradient from './ButtonGradient.vue';
import { handleImages } from '@/utils';

const modelOfDogs = ref([
   {
      picture: 'Yellow-dog.svg',
      stars: 'Rating.svg',
      description: 'Yellow sweatshirt',
      price: '$85,00'
   },
   {
      picture: 'Red-dog.svg',
      stars: 'Rating.svg',
      description: 'Red sweatshirt',
      price: '$85,00'
   },
   {
      picture: 'Blue-dog.svg',
      stars: 'Rating-gold.svg',
      description: 'Blue casual shirt',
      price: '$85,00'
   },
   {
      picture: 'Black-dog.svg',
      stars: 'Rating.svg',
      description: 'Printed sweatshirt',
      price: '$85,00'
   }
]);
</script>

<style scoped>

#bodyTwo {
  background-color: #fff5fff2;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
}

section {
  min-height: 100%;
  flex-grow: 2;
  display: flex;
  align-items: center;
}

header {
  align-self: center;
}

.circle {
  position: absolute;
}

.circle1 {
  width: 268px;
  height: 268px;
  border-radius: 50%;
  background-color: #6fff0014;
  border: 1px solid #33ff0029;
  box-shadow: 0 0 10px #1b850140;
  position: absolute;
  bottom: -150px;
  right: -70px;
}

.circle2 {
  width: 212px;
  height: 212px;
  border-radius: 50%;
  border: 1px solid #3d023b0d;
  box-shadow: 0 0 10px #4301418c;
  background-color: #62005f54;
  position: absolute;
  top: 95px;
  left: 840px;
}

.circle3 {
  width: 126px;
  height: 126px;
  border-radius: 50%;
  background-color: #ff426563;
  border: 1px solid #ff426517;
  box-shadow: 0 0 10px #ff42658f;

  position: absolute;
  top: 565px;
  left: 283px;
}

#gridSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  gap: 35px;
}

h1 {
  text-align: center;
  font-size: 48px;
  font-family: "inter", bold;
  width: 187px;
}

.gradient {
  display: inline;
  background: linear-gradient(to right, #FD7452 50%, #FF4265 100%, transparent 100%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

ul {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 30px;
}

.modelsGrid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

#picture {
  width: 204px;
  height: 180px;
  border: 1px solid #F63D3D;
  border-radius: 10px;
}

#stars {
  width: 92px;
  height: 15px;
  margin: 20px auto;
}

.gridPicture {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  width: 186px;
  height: 19px;
  font-family: "Inter", Medium;
  font-size: 18px;
  text-align: center;
}

p {
  color: red;
  margin: 18px auto;
  font-family: "Inter", Medium;
  font-size: 15px;
}

@media screen and (max-width: 1440px) {
  .circle1 {
    bottom: -214px;
    right: -127px;
  }
}


@media screen and (max-width: 1370px) {
  .circle1 {
    width: 258px;
    height: 258px;
    right: -163px;
  }
  .circle3 {
    display: none;
  }
}
@media screen and (max-width: 1250px) {
  #OurStore {
    width: 480px;
  }
  .circle1 {
    width: 200px;
    height: 200px;
    bottom: -150px;
    right: -200px;
  }
  .circle2 {
    width: 150px;
    height: 150px;
    top: 95px;
    left: 765px;
  }
  .circle3 {
    top: 536px;
  }
  h1 {
    font-size: 43px;
  }
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
  #picture {
    width: 180px;
    height: 140px;
  }
}
@media screen and (max-width: 1045px) {
  #OurStore {
    width: 460px;
  }
  .circle1 {
    width: 170px;
    height: 170px;
    right: 60px;
  }
  .circle2 {
    left: 255px;
    top: 110px;
    width: 140px;
    height: 140px;
  }
  .circle3 {
    top: 575px;
    left: 65px;
  }
  h1 {
    font-size: 38px;
    width: 170px;
    height: 95px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  #picture {
    width: 160px;
    height: 160px;
  }
  #stars {
    width: 90px;
  }
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 14px;
  }
}
@media screen and (max-width: 695px) {
  #OurStore {
    width: 360px;
  }
  .circle1 {
    position: unset;
    width: 0px;
    height: 0px;
  }
  .circle2 {
    left: 160px;
    top: 55px;
    width: 120px;
    height: 120px;
  }
  .circle3 {
    top: 690px;
    left: -95px;
  }
}
@media screen and (max-width: 400px) {
  .circle1 {
    display: none;
  }
  .circle2 {
    display: none;
  }
  .circle3 {
    display: none;
  }
}
</style>