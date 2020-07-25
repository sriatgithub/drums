var randomnum1 = Math.floor((Math.random() * 6)) + 1;
var randomimg1 = "images/" + "dice" + randomnum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimg1);

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "images/" + "dice" + randomnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimg2);

if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerText = "Player 1 wins😎";
} else if (randomnum1 < randomnum2) {
    document.querySelector("h1").innerText = "Player 2 wins😎";
} else {
    document.querySelector("h1").innerText = "Draw 🤝"
}