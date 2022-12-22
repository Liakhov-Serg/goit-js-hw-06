const ingredients = [
 { name: 'Potatoes'},
  { name: 'Mushrooms'},
  { name:'Garlic'},
  { name:'Tomatos'},
  { name:'Herbs'},
  {name:'Condiments'},
];
const list = document.querySelector("ul#ingredients");
// console.log(list);
ingredients.forEach((ingredient) => {
const li = document.createElement("li");
const name = document.createElement("p");
name.textContent = ingredient.name;

li.appendChild(name);

list.append(li);
console.log(li);
});