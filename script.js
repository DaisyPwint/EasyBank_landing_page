const navbar = document.querySelector(".navigation")
const menuBtn = document.querySelector(".menu-btn")
const closeBtn = document.querySelector(".close-btn")
const openBtn = document.querySelector(".open-btn")
let isShow = true;


openBtn.addEventListener("click",()=>{
  navbar.classList.add("active")
  closeBtn.classList.add("show")
  openBtn.classList.add("open")
})
closeBtn.addEventListener("click",()=>{
  navbar.classList.remove("active")
  closeBtn.classList.remove("show")
  openBtn.classList.remove("open")
})

