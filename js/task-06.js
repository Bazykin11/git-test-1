const input = document.querySelector("#validation-input");

input.addEventListener('blur', onBlur);


function onBlur(e) {
  e.preventDefault();

  const text = e.currentTarget.value;
  const textLength = text.length;
  const validLength = e.currentTarget.dataset.length;
  input.classList.remove("valid", "invalid");

  if (Number(validLength) === textLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}


