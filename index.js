var randomNumber1=Math.floor(Math.random()*6)+1;

var img1src = "images/dice" + randomNumber1 + ".png";//img1 link

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",img1src);


var randomNumber2=Math.floor(Math.random()*6)+1;

var img2src = "images/dice" + randomNumber2 + ".png";//img2 link

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",img2src);
if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="🏆PLAYER 1 WINS!"
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="PLAYER 2 WINS!🏆"

else
document.querySelector("h1").innerHTML="Draw !"

setTimeout(function(){
  image1.setAttribute("src","images/dice6.png");
  image2.setAttribute("src","images/dice6.png");
document.querySelector("h1").innerHTML="Refresh Me";
},6000);
