let srcEgg = [
  "eggcellent1.JPG",
  "eggcellent2.JPG",
  "eggcellent3.JPG",
  "eggcellent4.JPG",
  "eggcellent5.JPG",
  "eggcellent6.JPG",
  "eggcellent7.JPG",
];
let srcBit = [
  "bitcoin1.JPG",
  "bitcoin2.JPG",
  "bitcoin3.JPG",
  "bitcoin4.JPG",
  "bitcoin5.JPG",
  "bitcoin6.JPG",
];
let srcGame = ["Game1.JPG", "Game2.JPG", "Game3.png"];
let currEgg = 0;
let currBit = 0;
let currGame = 0;
window.addEventListener("DOMContentLoaded", init);
function init() {
  let webLeft = document.getElementById("web-left");
  let webRight = document.getElementById("web-right");
  let bitLeft = document.getElementById("bit-left");
  let bitRight = document.getElementById("bit-right");
  let gameLeft = document.getElementById("game-left");
  let gameRight = document.getElementById("game-right");
  webLeft.addEventListener("click", () => {
    let image = document.getElementById("web-img");
    currEgg = increment(currEgg, srcEgg.length);
    let src = `image/${srcEgg[currEgg]}`;
    image.setAttribute("src", src);
  });
  webRight.addEventListener("click", () => {
    let image = document.getElementById("web-img");
    currEgg = decrement(currEgg, srcEgg.length);
    let src = `image/${srcEgg[currEgg]}`;
    image.setAttribute("src", src);
  });
  bitRight.addEventListener("click", () => {
    let image = document.getElementById("bit-img");
    currBit = increment(currBit, srcBit.length);
    let src = `image/${srcBit[currBit]}`;
    image.setAttribute("src", src);
  });
  bitLeft.addEventListener("click", () => {
    let image = document.getElementById("bit-img");
    currBit = decrement(currBit, srcBit.length);
    let src = `image/${srcBit[currBit]}`;
    image.setAttribute("src", src);
  });
  gameRight.addEventListener("click", () => {
    let image = document.getElementById("game-img");
    currGame = increment(currGame, srcGame.length);
    let src = `image/${srcGame[currGame]}`;
    image.setAttribute("src", src);
  });
  gameLeft.addEventListener("click", () => {
    let image = document.getElementById("game-img");
    currGame = decrement(currGame, srcGame.length);
    let src = `image/${srcGame[currGame]}`;
    image.setAttribute("src", src);
  });
}
function decrement(number, length) {
  if (number == 0) {
    return length - 1;
  } else {
    return number - 1;
  }
}
function increment(number, length) {
  if (number == length - 1) {
    return 0;
  } else {
    return number + 1;
  }
}
