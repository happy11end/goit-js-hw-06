let counterValue = 0;
const increment = document.querySelector('button[data-action="increment"]')
const decrement = document.querySelector('button[data-action="decrement"]')
const value = document.getElementById('value')


function  calculator ()  {      
    counterValue -= -this.innerText
    value.innerText = counterValue  
};
increment.addEventListener("click", calculator)
decrement.addEventListener("click", calculator)