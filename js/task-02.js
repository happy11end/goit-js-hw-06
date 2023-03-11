const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");
 const ingredientsList = ingredients.map(e => {
  const li = document.createElement("li");
   li.textContent = e
   li.classList.add("item") 
    return li
 });
  
list.append(...ingredientsList)

