// fetch the dom elements we will manipulate
let count = document.getElementById('count');
let input = document.getElementById('input');
let secondTextbox = document.getElementById('secondTextbox');

// compute and update the count
function wordCounter() {

    // regex takes care of carriage return,form feed etc. as well
    let a = input.value;
    let b = secondTextbox.value;
    let text =  a + " " + b;
    let finalString = text.trim().split(/\s+/);
    console.log(finalString);
    let wordCount = 0;

    for (let i = 0; i < finalString.length; i++) {
        if (finalString[i] !== "") {
            wordCount++;
        }
        count.innerText = wordCount;
    }
}

// register listeners that trigger the wordCounter
input.addEventListener('keyup', wordCounter);
secondTextbox.addEventListener('keyup', wordCounter);

document.addEventListener("DOMContentLoaded", wordCounter);