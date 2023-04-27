const facebookContainer = document.querySelector("#facebook");
const iconfacebook = document.querySelector(".icon-sm-facebook");

facebookContainer.addEventListener("mouseenter", function (){
  iconfacebook.src = "./assets/icon-facebook-color.png"
});

facebookContainer.addEventListener("mouseleave", function (){
  iconfacebook.src = "./assets/icon-facebook.png"
});

const instagramContainer = document.querySelector("#instagram");
const iconInstagram = document.querySelector(".icon-sm-instagram");

instagramContainer.addEventListener("mouseenter", function (){
  iconInstagram.src = "./assets/icon-instagram-color.png"
})

instagramContainer.addEventListener("mouseleave", function (){
  iconInstagram.src = "./assets/icon-instagram.png"
})

const reserveButton = document.querySelector(".reserve-button")

reserveButton.addEventListener("mouseenter", function (){
  reserveButton.style.backgroundColor = "#FFF";
  reserveButton.style.height = "40px";
  reserveButton.style.width = "40px";
  reserveButton.style.padding = "0";
  reserveButton.style.borderRadius = "50%";

  reserveButton.innerHTML = "";

  const arrowDown = document.createElement("img")
  reserveButton.appendChild(arrowDown)
  arrowDown.src = "./assets/botao-circular-preto-de-seta-para-baixo.png"
  arrowDown.style.height = "100%"
  arrowDown.style.width = "100%"
  
})