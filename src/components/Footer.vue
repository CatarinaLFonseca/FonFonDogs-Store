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
            <div class="socialMidiaContainer">
                <h2 class="gradient">Follow on social</h2>
                <div class="imgGrid">
                    <img :src="'/images/IconInsta.svg'" alt="icon insta">
                    <img :src="'/images/IconFace.svg'" alt="icon face">
                </div>
            </div>
        </div>
    </div>
</template>
    
<style scoped>
    #bodyFooter {
        background-image: linear-gradient(360deg, #040006 -30%, #62005F);
        height: 80px;
        display: flex;  
        align-items: center;
        padding-inline: 20px;
    }

    #reserved {
        width: 100%;
    }

    nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #imgGrid {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }

    h1 {
        color: #ffff;
        font-family: "Inter", Regular;
        font-size: 16px;
        font-weight: 300;
    }
    
    a {
        color: #ffff;
        font-family: "Inter", Regular;
        font-size: 14px;
        font-weight: 300;
        text-decoration: none;
    }

    #socialMidia {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
    }

    .socialMidiaContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
    }

    h2 {
        font-family: "Inter", Bold;
        font-size: 14px;
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
        font-size: 12px;
    }
    h2 {
        font-family: "Inter", Bold;
        font-size: 12px;
    }   
}
@media screen and (max-width: 1180px) {
    h1 {
        font-size: 14px;
    }    
    a {
        font-size: 12px;
    }
}
@media screen and (max-width: 906px) {
    h1 {
        font-size: 12px;
    }
    a {
         font-size: 10px;
    }
    h2 {
        font-size: 11px;
    }

    #socialMidia {
        display: none;
    }
}
@media screen and (max-width: 620px) {
    h1 {
        font-size: 11px;
    }
    h2 {
        font-size: 9px;
    }
}

@media screen and (max-width: 570px) {
    h1 {
        font-size: 10px;
    }
    h2 {
        font-size: 8px;
    }
}
@media screen and (max-width: 490px) {
    #socialMidia {
        display: none;
    }
}
</style>
    