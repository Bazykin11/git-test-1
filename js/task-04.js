

let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');


const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

decrement.addEventListener("click", onClick);
increment.addEventListener("click", onClick);



function onClick(evt) {
 if (evt.target.dataset.action === "decrement") {
   counterValue -= 1;
 } else if (evt.target.dataset.action === "increment") {
   counterValue += 1;
 }

 value.textContent = counterValue;
}
