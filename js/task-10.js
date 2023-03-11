function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNum  = document.querySelector("#controls>input")
const btnCreate = document.querySelector("[data-create]")
const btnDestroy = document.querySelector("[data-destroy]")
const boxesDiv = document.querySelector("#boxes")

btnCreate.addEventListener("click", () => {
    createBoxes(inputNum.value)})
btnDestroy.addEventListener("click", destroyBoxes )


function createBoxes(amount) {
  const elementsToAdd = []
  for (let i = 0; i < amount; i += 1) {    
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementsToAdd.push(div)
  }
  boxesDiv.append(...elementsToAdd)
}
function destroyBoxes() { 
  const boxesDivs = document.querySelector("#boxes");
  boxesDivs.innerHTML = ""
}
