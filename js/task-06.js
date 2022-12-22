const textInput = document.querySelector("#validation-input");
console.log(textInput);

textInput.addEventListener("blur", () => {
    console.log(textInput.value.length);

    if(textInput.value.length === 6) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid")
        console.log("valid");
    } 
        else {textInput.classList.remove("valid");
           textInput.classList.add("invalid");
           console.log("invalid");
        }


})

