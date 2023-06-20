const navbar = document.querySelector(".navigation")
const menuBtn = document.querySelector(".menu-btn")
const closeBtn = document.querySelector(".close-btn")
const openBtn = document.querySelector(".open-btn")
const mockups = document.querySelector(".mockups-bg")
let isShow = true;


openBtn.addEventListener("click",()=>{
  navbar.classList.add("active")
  closeBtn.classList.add("show")
  openBtn.classList.add("open")
  mockups.classList.add("modal-overlay")
})
closeBtn.addEventListener("click",()=>{
  navbar.classList.remove("active")
  closeBtn.classList.remove("show")
  openBtn.classList.remove("open")
  mockups.classList.remove("modal-overlay")
})

