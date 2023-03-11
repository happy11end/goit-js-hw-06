const textInput = document.getElementById("validation-input")


function checkLength() {
    if (this.selectionEnd === Number(textInput.dataset.length))
        {this.classList.add("valid")
      if (this.classList.contains("invalid")) this.classList.remove("invalid")}
        
    else {this.classList.add("invalid")
        if (this.classList.contains("valid")) this.classList.remove("valid")}
}

textInput.addEventListener("blur", checkLength )