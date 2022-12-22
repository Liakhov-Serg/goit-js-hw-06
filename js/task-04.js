let countervalue = 0;
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
decrementBtn.addEventListener("click", () => {
    countervalue -=1;
    document.getElementById("value").textContent = countervalue;
} 
);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
incrementBtn.addEventListener("click", () => {
    countervalue +=1;
    document.getElementById("value").textContent = countervalue;
} 
);
console.log(countervalue);