const textInput = document.querySelector("#name-input");

const placeholder = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if(event.currentTarget.value) {
        placeholder.textContent = event.currentTarget.value;
    }
    else {placeholder.textContent = "Anonymous";}
} );