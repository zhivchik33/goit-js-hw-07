

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", setOutput);

function setOutput(event) {
  const nameValue = event.target.value;
  output.textContent = nameValue.trim() ?  nameValue : "Anonymous"
};