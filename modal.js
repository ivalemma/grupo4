//M O D A L

const modalOpen =  document.querySelector(".modal-cta");
const modal = document.querySelector(".mmodal");
const modalClose = document.querySelector(".modal__close")

modalOpen.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal__show")
})

modalClose.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal__show")
})

