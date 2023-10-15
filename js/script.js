// rule box show and hide
const rules = document.querySelector(".rules");
const ruleBox = document.querySelector(".full-rule-box");
const rulesBoxClose = document.querySelector(".rules-box-close");

ruleBox.style.display = "none";

rules.addEventListener("click", () => {
  ruleBox.style.display = "block";
});
rulesBoxClose.addEventListener("click", () => {
  ruleBox.style.display = "none";
});
// end of rule box

//-----------Game Part-------------------------

// choice selected from index.html
const rock1 = document.querySelector("#rock1");
const scissor1 = document.querySelector("#scissor1");
const paper1 = document.querySelector("#paper1");

let pScoreText = document.querySelector("#P-Score");
let cScoreText = document.querySelector("#C-Score");

let resetGame = document.querySelector(".reset-game");

// click event listener from page 1
rock1.addEventListener("click", () => {
  window.location.href = "Frame2.html";
  localStorage.setItem("rock1", "1");
});

scissor1.addEventListener("click", () => {
  window.location.href = "Frame2.html";
  localStorage.setItem("scissor1", "2");
});

paper1.addEventListener("click", () => {
  window.location.href = "Frame2.html";
  localStorage.setItem("paper1", "3");
});

//reseting game from zero --- extra added---
let pScoreVal = localStorage.getItem("uScore");
let cScoreVal = localStorage.getItem("cScore");
// Set the initial value of pScoreVal to 0
if (pScoreVal === null && cScoreVal === null) {
  pScoreVal = 0;
  cScoreVal = 0;
}

resetGame.addEventListener("click", () => {
    localStorage.removeItem("uScore");
    localStorage.removeItem("cScore");
    location.reload();
});

//printing score on screen ..
pScoreText.textContent = pScoreVal;
cScoreText.textContent = cScoreVal;