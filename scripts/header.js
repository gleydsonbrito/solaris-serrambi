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