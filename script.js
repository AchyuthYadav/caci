let result = document.querySelector(".result");
let allButton = document.querySelectorAll("button")

let initialValue = 0;
result.innerText = initialValue;

allButton.forEach(ele => {
    ele.addEventListener("click" , buttonClick)
});

function buttonClick(event) {

     // for making equal button to work
    if (event.target.classList.contains("equal")){
     result.innerText = eval(result.innerText)
     return;
    }

     // for making clear button to work 
    if (event.target.classList.contains("clear")){
     result.innerText = initialValue ;
     return;
    }

     // for initializing zero 
    if (result.innerText == initialValue) {
        result.innerText = event.target.innerText;
    } else {
     result.innerText += (event.target.innerText) 
    } 
}