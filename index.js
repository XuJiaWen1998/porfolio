let webdev = document.getElementById("webdev");
let webdevBut = document.getElementById("web-button");
webdevBut.addEventListener("click", () => {
  if ((webdev.className = "webdev")) {
    let img1 = document.createElement("img");
    img1.setAttribute(src, "eggcellent1.JPG");
    webdev.appendChild(img1);
    console.log("here");
  }
});
