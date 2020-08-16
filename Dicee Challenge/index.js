var random_number1 = Math.floor(Math.random() * 6) + 1;

var src_img1 = "images/dice" +random_number1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",src_img1);

var random_number2 = Math.floor(Math.random() * 6) + 1;

var src_img2 = "images/dice" +random_number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",src_img2);

if(random_number1>random_number2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(random_number1<random_number2){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML = "DRAW!";
}
