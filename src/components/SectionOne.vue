<template>
    <div id="bodyOne">
        <header>
            <img src="/public/images/Logo.svg" alt="logo" id="logo">
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Service</a>
                <a href="">Shop</a>
                <a href="" id="contact">Contact us</a>
            </nav>
        </header>
        <section>
            <div class="sectionAlign">
                <h2 class="gradient">Welcome..</h2>
                <h1>Style and comfort for your pet: where <span class="gradient">fashion meets love!</span></h1>
                <p>Discover our collection of exclusive clothing that combines comfort, elegance and lots of love for your best friend.</p>
                <div class="buttons">
                    <button-gradient title="Our Services" />
                    <button-link />
                </div>
            </div>
        </section>
        <div class="imgRight">
            <img src="/public/images/image-right.svg" alt="Group Dogs" id="groupDogs">
        </div>  
    </div>
</template>

<script setup>
import ButtonGradient from './ButtonGradient.vue';
import ButtonLink from './ButtonLink.vue';
</script>

<style scoped>

#bodyOne {
    background-image: 
    radial-gradient(circle 300px at 5% top, #ff506425, #ff526c13, transparent),
    radial-gradient(circle 280px at 20%, #ff990015, #ff526c09, transparent),
    radial-gradient(circle 330px at 11% bottom, #9cff5010, #ff526c09, transparent),
    linear-gradient(45deg, #040006 29%,  #62005F);
    height: 100vh;
    border-radius: 0px 0px 10px 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.imgRight {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

#groupDogs {
    display: flex; 
    position: absolute;
    width: 980px;
}

#logo {
    position: absolute;
    left: 5%;
    top: 1%;
}

header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
}

a {
    display: flex;
    color: #ffff;
    text-decoration: none;
    font-size: 16px;
    font-family: "Inter", Regular;
    padding-right: 10%;
    padding-top: 2%;
}

#contact {
    margin-left: 3%;
    padding-right: 5%;
}

section {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.sectionAlign {
    display: flex;
    flex-direction: column;
    margin-right: 55%;
    width: 516px;
    height: 375px;
}

h2 {
    font-family: "Inter", SemiBold;
    font-weight: 800;
    font-size: 19px;
    width: 102px;
    height: 28px;
    margin-bottom: 28px;

}

h1 {
    color: #ffff;
    font-family: "Inter", Light;
    font-weight: 300;
    font-size: 55px;
    color: #ffff;
    width: 516px;
    height: 199px;
    margin-bottom: 4px;
}

p {
    color: #ffff;
    font-family: "Inter", Regular;
    font-weight: 300;
    font-size: 17px;
    color: #999999;
    width: 496px;
    height: 56px;
    margin-bottom: 3px;
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
    margin: auto;
    margin-right: 41%;
    width: 304px;
    height: 48px;
}

@media screen and (max-width: 1930px) {
    #logo {
        width: 265px;
    }
    #groupDogs {
        width: 870px;
    }
    a {
        font-size: 14px;
    }
    .sectionAlign {
        margin-right: 50%;
    }
    h2 {
        font-size: 17px;
    }
    h1 {
        font-size: 50px;
    }
    p {
        font-size: 15px;
    }
}
@media screen and (max-width: 1370px) {
    #logo {
        width: 230px;
    }
    #groupDogs {
        width: 635px;
    }
    a {
        font-size: 12px;
    }
    #contact {
        margin-left: 3%;
    }
    .sectionAlign {
        height: 315px;
    }
    h2 {
        font-size: 16px;
        margin-bottom: 25px;
    }
    h1 {
        font-size: 38px;
        width: 485px;
        height: 130px;
        margin-bottom: 15px;
    }
    p {
        font-size: 13px;
        width: 465px;
    }
}
@media screen and (max-width: 1250px) {
    #bodyOne {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #logo {
        width: 220px;
        left: 1%;
    }
    #groupDogs {
        display: none
    }
    a {
        font-size: 14px;
        padding-right: 8%;
        padding-top: 2.88%;
    }
    .sectionAlign {
        margin: auto;
    }
    p {
        font-size: 15px;
        margin-bottom: 25px;

    }

    .buttons {
        margin: auto;
        width: 516px;
    }
}
@media screen and (max-width: 880px) {
    #logo {
        width: 220px;
        left: 1%;
    }
    #groupDogs {
        display: none
    }
    a {
        padding-right: 6%;
        padding-top: 4%;
    }
    #contact {
        padding-right: 3%;
    }
    .sectionAlign {
        margin: auto;
    }
}
@media screen and (max-width: 700px) {
    header {
        flex-direction: column-reverse;
    }
    #logo {
        position: unset;
        width: 200px;
        margin-top: 5%;
    }
    #groupDogs {
        display: none
    }
    nav {
        justify-content: center;
    }

    a {
        font-size: 12px;
    }
    #contact {
        padding-right: 0%;
        margin-left: 0%;
    }
    .sectionAlign {
        justify-content: center;
        margin: auto;
        width: 300px;
        height: 200px;
    }
    h2 {
        font-size: 19px;
    }

    h1 {
        font-size: 40px;
        height: 140px;
        width: 325px;
    }

    p {
        font-size: 12px;
        width: 300px;
        
    }
    .buttons {
        width: 280px;
    }
}
</style>