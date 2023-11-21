const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const li = document.createElement('li'); 
  const p = document.createElement('p');
  p.textContent = el;
  li.append(p);
  // li.classList.add(item)
  list.append(li);
  li.classList.add("item");
})