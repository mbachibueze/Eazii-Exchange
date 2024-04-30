const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars"
}

// const toggleAns = document.querySelectorAll(".fa-angle-down")
const toggleAnsIcon = document.querySelector(".faq-question i")
const faqAns = document.querySelector(".faq_ans")
const body = document.querySelector("body")

const toggleAns = () =>{
  faqAns.classList.toggle('faq-open')
  const isOpen = faqAns.classList.contains('faq-open')

  toggleAnsIcon.classList = isOpen ? 'fas fa-angle-up' : 'fas fa-angle-down'
}

// toggleAns.onclick = function(){
  
// }