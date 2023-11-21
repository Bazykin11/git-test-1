/** @format */


const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');


input.addEventListener('input', onInput);


function onInput(evt) {
    evt.preventDefault()
    if (text.textContent === '') {
    } 
        text.textContent = evt.currentTarget.value;
}
