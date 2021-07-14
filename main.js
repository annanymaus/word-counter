// fetch the dom elements we will manipulate
let count = document.getElementById('count');
let input = document.getElementById('input');

// compute and update the count
function wordCounter() {
    
    // regex takes care of carriage return,form feed etc. as well
    let text = input.value.trim().split(/\s+/); 
    console.log(text);
    let wordCount = 0;
    //console.log(wordCount);
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== "") {
            wordCount++;
        }
        count.innerText = wordCount;    
    }
}

// register listeners that trigger the wordCounter
input.addEventListener('keyup', wordCounter);

document.addEventListener("DOMContentLoaded", wordCounter);   