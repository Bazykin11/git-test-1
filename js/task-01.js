const list = document.querySelector('#categories');

const item = [...list.children];

console.log("Number of categories:", item.length);



item.forEach((elem) => {
    const categories = [...elem.children];
    const elements = [...categories]
    console.log(categories[0].textContent);
    console.log(elements[1].childElementCount);
});