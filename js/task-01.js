const ulElem = document.querySelector(`ul#categories`);
const countOfChildren = ulElem.children.length;
console.log(`Number of categories: ${countOfChildren}`);

// const categList = [...document.querySelectorAll(`ul#categories`)];
// const categArr = categList.map((categories) =>{
//     const categori = [...categories.children];
// })

const itemList = [...document.querySelectorAll(`.item`)];

const itemArr = itemList.map((item) => {
    const categor = [...item.children];

   const itemObj = {};

itemObj[categor[0].textContent] = 
[...categor[1].children].map((item) => 
item.textContent);

return itemObj;

});
    console.log(itemArr);

    




