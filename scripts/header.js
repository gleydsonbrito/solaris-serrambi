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

let clicked = false
const reserveButton = document.querySelector(".reserve-button")
reserveButton.addEventListener("click", function (){
  clicked = !clicked

  if (clicked){
    reserveButton.style.backgroundColor = "#FFF";
    reserveButton.style.height = "41px";
    reserveButton.style.width = "40px";
    reserveButton.style.padding = "0";
    reserveButton.style.borderRadius = "50%";
    reserveButton.innerHTML = "";

    const arrowDown = document.createElement("img")
    reserveButton.appendChild(arrowDown)
    arrowDown.src = "./assets/botao-circular-preto-de-seta-para-baixo.png"
    arrowDown.style.height = "100%"
    arrowDown.style.width = "100%"
    
    const floatMenu = document.querySelector(".float-buttons");
    floatMenu.style.display = "flex"
    floatMenu.style.flexDirection = "column"
    floatMenu.style.backgroundColor = "rgba(143, 143, 143, 0.6)"
    floatMenu.style.borderRadius = "20px"
    floatMenu.style.padding = "0 2px"

    const booking = document.querySelector('rounded-booking');
    booking.classList.add('b')

  }else {
    reserveButton.style.backgroundColor = "#446573";
    reserveButton.style.border = "none";
    reserveButton.style.width = "128px"
    reserveButton.style.padding = "13px 28px;"
    reserveButton.style.borderRadius = "0";
    reserveButton.style.marginLeft = "1%";
    reserveButton.style.marginRight = "5%";
    reserveButton.style.trasition = ".7s"
    reserveButton.textContent = "RESERVAR";
    reserveButton.style.color = "white";

    const floatMenu = document.querySelector(".float-buttons");
    floatMenu.style.display = "none";
  }
})

