var character = document.getElementById("character");  //const
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
const boxes = ['block',' block2', 'block3'];
console.log(boxes.length);
 

function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
} //odnawia sie 

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
         
        }
        //funkcja od animacji 
        punkt.innerHTML = "punkty: " + punkty;
    },100);
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


function showboxes() {
    const random = Math.floor(Math.random() * boxes.length);
console.log(random, boxes[random]);
}



document.body.onkeydown = function(e) {
    if(e.keyCode == jumpingKeyCode) {
        if(ingame == 0) {
            start();
            showboxes();
        }
        jump();
        sound.play();
    }
    
}

//document czyli cala strona


var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character). //getcomputedstyle wartosc css
        getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block). 
        getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 && characterTop>=130){
        end();
    }
},10);

//setinterval funkcja ktora sie powtarza