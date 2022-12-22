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

// const textInput = document.querySelector("#validation-input");
// console.log(textInput);
// textInput.addEventListener("blur", () => {
//    if (textInput.value.length === Number(textInput.dataset.length)) {
//     textInput.classList.add("valid");
//    }
//    else {
//     textInput.classList.remove("valid");
//     textInput.classList.add("invalid");
//    }
//   });

// elem.classList.replace(oldClass, newClass)
// elem.classList.add(cls) - додає клас cls до списку класів елемента.
// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.