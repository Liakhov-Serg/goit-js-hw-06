const ulElem = document.querySelector(`ul#categories`);
const countOfChildren = ulElem.children.length;
console.log(`Number of categories: ${countOfChildren}`);

 

const itemList = [...document.querySelectorAll(`.item`)];



const itemArr = itemList.map((item) => {
    const title = [...item.children];

const itemObj = {};
itemObj[title[0].textContent] = [...title[1].children].map(item => item.textContent);

return itemObj;

    });
    console.log(itemArr);




