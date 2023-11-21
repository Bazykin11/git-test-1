function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const input = document.querySelector('input');
const divBox = document.querySelector("#boxes");
const controls = document.querySelector("#controls");

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

destroyButton.addEventListener("click", onDestroy);

createButton.addEventListener("click", createBoxes);



function onDestroy() {
  divBox.innerHTML = "";
}

function createBoxes() {
  const amount = input.value; // Получаем значение из input
   let size = 30; 

  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement("div");
    divElement.style.backgroundColor = getRandomHexColor();
        divElement.style.width = `${size}px`;
        divElement.style.height = `${size}px`;
        divElement.style.margin = "5px";
    divBox.appendChild(divElement);
    size += 10; 
    input.value = '';
  }
}
