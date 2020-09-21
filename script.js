var character = document.getElementById("character");  
var block = document.getElementById("block");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var punkt = document.getElementById("pkt");
var rekordd = document.getElementById("rekord");
var licznik;
var rekord = 0;
var punkty = 0;
var ingame = 0;
var sound = new Audio('jump.mp3');
var jumpingKeyCode = 32;

 


function start() {
    ingame = 1;
    punkty = 0;
    block.style.animation = "animate 1.5s linear infinite";

    licznik = setInterval(function(){
        punkty++;
        switch(punkty) {
            case 50:
                block.style.animation = "animate 1s linear infinite";
            break;
            case 100:
                block.style.animation = "animate 900ms linear infinite";
            break;
            case 200:
                block.style.animation = "animate 750ms linear infinite";
            break;
         
        } 
        punkt.innerHTML = "punkty: " + punkty;
    },100);
}


function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}



function end() {
    block.style.animation = "none";
  
    ingame = 0;
    clearInterval(licznik);
    if(punkty>rekord) {
        rekord=punkty;
        rekordd.innerHTML = "rekord: " + rekord;
        punkt.innerHTML= "<font color=\"green\"> Ustanowiłeś/aś nowy rekord! Twoje punkty: " + punkty + "</font>";
    } else {
        punkt.innerHTML="<font color=\"red\">  Przegrales ! Twoj wynik to : " + punkty + "</font>";
    }
}



document.body.onkeydown = function(e) {
    if(e.keyCode == jumpingKeyCode) {
        if(ingame == 0) {
            start();
        }
        jump();
        sound.play();
    }
    
}


var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).
        getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block). 
        getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 && characterTop>=130){
        end();
    }
},10);