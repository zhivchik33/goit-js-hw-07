function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes")


function createBoxes(amount) {
  let boxSize = 30;
boxesContainer.innerHTML = '';
const boxArray = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.margin = '10px';
    boxSize += 10;
    boxArray.push(box);
    
  }
  return boxArray;
}

createButton.addEventListener('click', () => {
  const amount = + inputValue.value;
  if (amount >= 1 && amount <= 100){
    boxesContainer.append(createBoxes(amount));
    
  }
});

function destroyBoxes(){
  boxesContainer.innerHTML = '';
}

destroyButton.addEventListener('click', destroyBoxes);