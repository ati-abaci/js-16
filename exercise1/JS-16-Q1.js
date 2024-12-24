// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
const heartIcon = document.querySelector(".cards__card__img__icon i")
const counter = document.querySelector(".cards__card__img__icon__text")
heartIcon.addEventListener("click",(el)=>{
    el.target.style.color = "crimson"
    let increaseNumber = parseInt(counter.textContent)
    counter.textContent = increaseNumber + 1;
})
