
// returns a list of strings from strings in both text boxes
function getTextBoxesString() {
    let firstTextBox = document.getElementById('first-text-box');
    let secondTextBox = document.getElementById('second-text-box');
    let textBox1 = firstTextBox.value.trim();
    let textBox2 = secondTextBox.value.trim();
    let finalString = textBox1 + " " + textBox2;
    let splitString = finalString.split(/\s+/);
    return splitString;
}

// returns the number of strings in the list of strings
function countWords(inputList) {
    let wordCount = 0;
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i] !== "") {
            wordCount++;
        }
    }
    return wordCount;
}

// updates the value of 'count' dom object
function updateCount(wordCount) {
    let count = document.getElementById("count");
    count.innerText = wordCount;
}

// event listener
function finalCall() {
    let step1 = getTextBoxesString();
    let step2 = countWords(step1);
    updateCount(step2);
}

// registering event listener
let firstTextBox1 = document.getElementById('first-text-box');
let secondTextBox1 = document.getElementById('second-text-box');
firstTextBox1.addEventListener('keyup', finalCall);
secondTextBox1.addEventListener('keyup', finalCall);

document.addEventListener("DOMContentLoaded", finalCall);