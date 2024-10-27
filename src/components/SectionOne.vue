<template>
    <div id="bodyOne">
        <header>
            <div class="content-logo">
                <img :src="'/images/Logo.svg'" alt="logo">
            </div>
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Service</a>
                <a href="">Shop</a>
                <a href="">Contact us</a>
            </nav>
        </header>

        <section>
            <div class="sectionLeft">
                <div class="sectionLeftContent">
                    <h2 class="gradient">Welcome..</h2>
                    <h1>Style and comfort for your pet: where <span class="gradient">fashion meets love!</span></h1>
                    <p>Discover our collection of exclusive clothing that combines comfort, elegance and lots of love for your best friend.</p>
                    <div class="buttons">
                        <button-gradient title="Our Services" />
                        <button-link />
                    </div>
                </div>
            </div>

            <div class="sectionRight">
                <img :src="'/images/image-right.svg'" alt="Group Dogs">
            </div>
        </section>
    </div>
</template>

<script setup>
import ButtonGradient from './ButtonGradient.vue';
import ButtonLink from './ButtonLink.vue';
</script>

<style scoped>

#bodyOne {
    border-radius: 0px 0px 10px 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-image: 
    radial-gradient(circle 300px at 5% top, #ff506425, #ff526c13, transparent),
    radial-gradient(circle 280px at 20%, #ff990015, #ff526c09, transparent),
    radial-gradient(circle 330px at 11% bottom, #9cff5010, #ff526c09, transparent),
    linear-gradient(45deg, #040006 29%,  #62005F);
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
}

.content-logo {
    display: flex;
    height: 100%;
    width: 100%;
}

.content-logo img {
    width: 300px;
}

nav {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
}

a {
    color: #ffff;
    text-decoration: none;
    font-size: 16px;
    font-family: "Inter", Regular;
}

section {
    display: flex;
    height: 100%;
    padding-top: 75px;
}

.sectionLeft {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 65px;
}

.sectionLeftContent {
    display: flex;
    flex-direction: column;
    max-width: 512px;
    gap: 15px
}

.sectionRight {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;
}

.sectionRight img {
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 10px;
}

h2 {
    font-family: "Inter", SemiBold;
    font-weight: 800;
    font-size: 19px;
    margin-bottom: 10px;
}

h1 {
    color: #ffff;
    font-family: "Inter", Light;
    font-weight: 300;
    font-size: 55px;
    color: #ffff;
}

p {
    color: #ffff;
    font-family: "Inter", Regular;
    font-weight: 300;
    font-size: 17px;
    color: #999999;
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
    margin-top: 20px;
}


@media screen and (max-width: 1930px) {
    a {
        font-size: 14px;
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
    .sectionLeft {
        margin-top: 0px;
    }
    .sectionLeftContent {
        padding-left: 0px;
    }
    h2 {
        font-size: 16px;
    }
    h1 {
        font-size: 38px;
    }
}

@media screen and (max-width: 1250px) {
    section {
        padding: 25px;
    }

    .sectionRight {
        display: none;
    }

    #bodyOne {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

@media screen and (max-width: 700px) {
    .content-logo {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    
    .content-logo img {
        width: 250px;
    }
    
    nav {
        display: none;
    }
    
    a {
        font-size: 12px;
    }

    h2 {
        font-size: 19px;
    }

    h1 {
        font-size: 40px;
    }

    p {
        font-size: 12px;
    }
}
</style>