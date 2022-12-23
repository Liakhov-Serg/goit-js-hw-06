const ulElem = document.querySelector(`ul#categories`);
const countOfChildren = ulElem.children.length;
console.log(`Number of categories: ${countOfChildren}`);

const itemList = [...document.querySelectorAll(`.item`)];


itemList.forEach(elem => {
    const numberCategories = elem.querySelectorAll("ul>li").length;
    const title = elem.querySelector("h2").textContent;
    console.log(`Category:`, title);
    console.log(`Elements:`, numberCategories);
})





