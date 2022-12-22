const input = document.getElementById("font-size-control");
console.log(input);
const span = document.getElementById("text");
console.log(span);
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
    span.style.fontSize = event.currentTarget.value+"px";
}