var button1 = document.getElementById("button1");
var button2= document.getElementById("button2");
var button3= document.getElementById("button3");
var titel=document.getElementById("title");
var subtxt=document.getElementById("description");
var bgimage=document.getElementById("game-container");
var item = document.getElementById("inventoryItem");
var gbuttons = document.getElementById("game-buttons");

var sword = 0;
var quest = 0;
var portal = 0;
var bad = 0;
var death =0;


function start(){
    item.style.display = "none";
    titel.innerHTML="<h1>Survive</h1>";
    subtxt.innerHTML="You have to survive and warn all humans about the forsaken that dwell in tirisfal glades.";
    button1.style.display="none";
    button2.innerHTML="Start game";
    button3.innerHTML="RUN AWAY";
    button2.onclick = trist1;
    button3.onclick = dead;
    button2.style.display="initial";
    button3.style.display="initial";
    bgimage.style.backgroundImage="url('images/tristfal.jpg')";
    gbuttons.style.display="absolute";
    item.style.display="none";
    sword=0;
    quest=0;
    bad =0;
    portal=0;
    death=0;
}
start();
function dead(){
    item.style.display = "none";
    button1.innerHTML="restart";
    button1.style.display="block";
    button2.style.display="none";
    button3.style.display="none";
    titel.innerHTML="<h1>You died</h1>";
    subtxt.innerHTML=""
    bgimage.style.backgroundImage = "url('images/dead.jpg')";
    button1.onclick= start;
    gbuttons.style.display="absolute"; 
    item.style.display="none";
    if(bad>0){
        subtxt.innerHTML="the orb led you to the hideout of the forsaken";
    }
    if(death>0){
        subtxt.innerHTML="you gave up your life to destroy the frostmourne saving others from corruption.";
    }
}


function trist1(){
    bgimage.style.backgroundImage = "url('images/tristspawn.jpg')";
    titel.innerHTML="<h1>Survive</h1>";
    subtxt.innerHTML="You somehow survived try and find others";
    item.style.display = "none";
    button1.innerHTML="go left";
    button2.innerHTML="go forward";
    button3.innerHTML="go right";
    button1.style.display="initial";
    button2.style.display="initial";
    button3.style.display="initial";
    button1.onclick= trist2;
    button2.onclick=trist3;
    button3.onclick=trist4;
    if(quest>0){
        subtxt.innerHTML="Use the circle somehow?";
    }
    item.style.display="none";
    if(sword>0){
        subtxt.innerHTML="Get out of here!";
    }
}
function trist2(){
    button1.style.display="none";
    button2.innerHTML="go forward";
    button3.innerHTML="go right";
    button2.style.display="initial";
    button3.style.display="initial";
    button2.onclick=trist6;
    button3.onclick=trist1;
    bgimage.style.backgroundImage = "url('images/trist2.jpg')";
    item.style.display="none";
    if(sword>0){
        subtxt.innerHTML="Get out of here!";
    }
}
function trist3(){
    bgimage.style.backgroundImage="url('images/tristcircle.jpg')";
    button1.style.display="none";
    button2.innerHTML="go back";
    button3.style.display="none";
    button2.onclick= trist1;
    item.style.display="none";
    subtxt.innerHTML="maybe i can use this circle somehow?";
    quest++;
    if(sword>0){
        button1.style.display="initial";
        button1.innerHTML="use sword?";
        button1.onclick=trist8;
        subtxt.innerHTML="the sword feels tingly should i use it?";
    }
}
function trist4(){
    bgimage.style.backgroundImage= "url('images/trist3.jpg')";
    button1.innerHTML="go left";
    button2.innerHTML="go forward";
    button3.style.display="none";
    button1.onclick= trist1;
    button2.onclick= trist5;
    item.style.display="none";
    if(sword>0){
        subtxt.innerHTML="Get out of here!";
    }
}
function trist5(){
    bgimage.style.backgroundImage="url('images/undercity.png')";
    button1.innerHTML="go forward";
    button2.innerHTML="go back";
    button3.style.display="none";
    button1.onclick= trist7;
    button2.onclick= trist4;
    item.style.display="none"; 
    if(sword>0){
        subtxt.innerHTML="Get out of here!";
    }
        
}
function trist6(){
    button1.style.display="none";
    button3.style.display="none";
    button2.style.display="initial";
    bgimage.style.backgroundImage="url('images/triskey.jpg')";
    item.src="images/Frostmourne.png";
    item.style.display="initial";
    item.onclick= trist61;
    button2.innerHTML="go back";
    button2.onclick= trist2;
    if(sword>0){
        item.style.display="none";
    }
    if(sword>0){
        subtxt.innerHTML="Get out of here!";
    }

}
function trist61(){
    sword++;
    button1.style.display="none";
    button3.style.display="none";
    button2.style.display="initial";
    bgimage.style.backgroundImage="url('images/triskey.jpg')";
    item.style.display="none";
    button2.innerHTML="go back";
    button2.onclick= trist2;
}
function trist7(){
    bgimage.style.backgroundImage="url('images/badend.jpeg')";
    item.style.display = "none";
    button1.innerHTML="touch orb";
    button2.innerHTML="go back";
    button1.onclick=dead;
    button2.onclick=trist5;
    bad++;
    subtxt.innerHTML="this orb looks suspicious";
    if(sword>0){
        subtxt.innerHTML="you suddenly feel more confident";
        button1.onclick=trist9;
    }
}
function trist8(){
    bgimage.style.backgroundImage="url('images/tristgoodend.jpg')";
    button2.innerHTML="use portal?";
    button1.style.display="none";
    button2.style.display="initial";
    button3.style.display="initial";
    button2.onclick=win;
    button3.onclick=trist1;
    subtxt.innerHTML="a portal opens should i enter?";
    item.style.display="none"; 
}
function win(){
    titel.innerHTML="<h1>you won</h1>";
    item.style.display = "none";
    subtxt.innerHTML="you've reached stormwind";
    bgimage.style.backgroundImage="url('images/stormwind.jpg')";
    button1.style.display="none";
    button2.style.display="initial";
    button3.style.display="none";
    button2.innerHTML="restart?";
    button2.onclick=start;
}
function trist9(){
    titel.innerHTML="<h1>the forsaken fear you</h1>";
    titel.style.display="initial";
    item.style.display = "none";
    subtxt.innerHTML="should i use this new found power?";
    bgimage.style.backgroundImage="url('images/frost.jpg')";
    button1.innerHTML="go home";
    button2.innerHTML="choose power";
    button3.innerHTML="destroy weapon";
    button1.style.display="initial";
    button2.style.display="initial";
    button3.style.display="initial";
    button1.onclick=win;
    button2.onclick=win2;
    button3.onclick=dead;
    death++;

}
function win2(){
    titel.innerHTML="<h1>praise the lich king !</h1>";
    item.style.display = "none";
    subtxt.innerHTML="you have become a lich king now rule this land";
    bgimage.style.backgroundImage="url('images/win2.jpg')";
    button1.style.display="none";
    button2.style.display="initial";
    button3.style.display="none";
    button2.innerHTML="restart?";
    button2.onclick=start;
    bgimage.style.display="url('images/win2.jpg')";
}
///