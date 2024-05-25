const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Siuuuu";
});

noBtn.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random()*(wrapperRect.width - noBtnRect.width))+1;
    const j = Math.floor(Math.random()*(wrapperRect.height - noBtnRect.height)) +1;

    noBtn.style.left = i +"px";
    noBtn.style.top = j + "px";
})

/**
 * const noBtn = document.querySelector(".no-btn");
noBtn.addEventListener("mouseover", moveHover)

function moveHover(){
    const i = Math.floor(Math.random()*500) +1;
    const j = Math.floor(Math.random()*500) +1;
    noBtn.style.left = i +"px";
    noBtn.style.top = j + "px";
}

const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Siuuuu";
});

**/