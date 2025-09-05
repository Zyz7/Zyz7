
const burger = document.querySelector(".hamburger")
const ul = document.querySelector("nav ul")
const nav = document.querySelector("nav")
const navlink = document.querySelectorAll(".ul-li-a") 

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})

navlink.forEach((link) => 
    link.addEventListener(("click"), () => {
        ul.classList.remove("show");
    })
);
