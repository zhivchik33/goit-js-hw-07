function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick () {
  const randomColor = getRandomHexColor();
  const bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = randomColor;

  const textElement = document.querySelector(".color");
  textElement.textContent = randomColor;
}

const button = document.querySelector(".change-color");
button.addEventListener("click", handleClick);