<template>
    <div id="bodyFooter">
        <div id="reserved">
            <h1> © all rights reserved <span>FonFonDogs</span></h1>
        </div>
        <nav>
            <a href="/">Our services</a>
            <a href="/">About us</a>
            <a href="/">FAQ</a>
            <a href="/">Contact</a>
        </nav>
        <div id="socialMidia">
            <h2 class="gradient">Follow on social</h2>
            <div class="imgGrid">
                <img src="@/assets/images/IconInsta.svg" alt="icon insta">
                <img src="@/assets/images/IconFace.svg" alt="icon face">
            </div>
        </div>
    </div>
</template>
    
<style scoped>
    #bodyFooter {
        background-image: linear-gradient(360deg, #040006 -30%, #62005F);
        height: 8vh;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #reserved {
        margin: 0px 10px;
    }

    h1 {
        color: #ffff;
        font-family: "Inter", Regular;
        font-size: 16px;
        font-weight: 300;
    }

    nav {
        margin: auto;
    }
    
    a {
        color: #ffff;
        margin: 41px;
        font-family: "Inter", Regular;
        font-size: 14px;
        font-weight: 300;
        text-decoration: none;
    }

    #socialMidia {
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h2 {
        font-family: "Inter", Bold;
        font-size: 14px;
        margin: 6px;
    }

    .imgGrid {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .gradient {
        display: inline;
        background: linear-gradient(to right, #FD7452 50%, #FF4265 100%, transparent 100%);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

@media screen and (max-width: 1370px) {
    h1 {
        font-size: 13px;
    }    
    a {
        margin: 41px;
        font-size: 12px;
    }
    #socialMidia {
        margin: 0px 20px;
    }
    h2 {
        font-family: "Inter", Bold;
        font-size: 12px;
        margin: 6px;
    }
    img {
        width: 12px;
        margin: 0px 2px;
    }
}
@media screen and (max-width: 1180px) {
    h1 {
        font-size: 14px;
    }    
    a {
        margin: 41px;
        font-size: 12px;
    }
    h2 {
        margin: 6px;
    }
}
@media screen and (max-width: 906px) {
    h1 {
        font-size: 12px;
    }
    a {
        margin: 25px;
        font-size: 10px;
    }
    h2 {
        font-size: 11px;
        margin: 5px;
    }
    img {
        width: 18px;
    }
}
@media screen and (max-width: 700px) {
    a {
        margin: 15px;
    }
}
@media screen and (max-width: 620px) {
    h1 {
        font-size: 11px;
    }
    a {
        margin: 13px;
    }
    h2 {
        font-size: 9px;
    }
    img {
        width: 15px;
    }
}
@media screen and (max-width: 570px) {
    h1 {
        font-size: 10px;
    }
    a {
        margin: 5px;
    }
    h2 {
        font-size: 8px;
    }
    img {
        width: 14px;
    }
}
@media screen and (max-width: 490px) {
    #socialMidia {
        display: none;
    }
}
</style>
    