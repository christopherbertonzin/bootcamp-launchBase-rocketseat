const cards = document.querySelectorAll(".card")
const modalOverlay = document.querySelector(".modalOverlay")

for (let card of cards) {
    card.addEventListener("click", function() {
        const page = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${page}`
    })
}

document.querySelector(".close_modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
    
})