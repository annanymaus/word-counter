
// returns a list of strings from strings in all text boxes
function getTextBoxesString() {
    let collectiveTextboxes = document.getElementsByClassName("input-box");
    let finalString = "";
    for(let i = 0; i < collectiveTextboxes.length; i++) {
        finalString = finalString + " " + collectiveTextboxes[i].value.trim();
    }
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
let collectiveTextboxes = document.getElementsByClassName("input-box");
for(let i = 0; i < collectiveTextboxes.length; i++) {
    collectiveTextboxes[i].addEventListener("keyup", finalCall);
}
document.addEventListener("DOMContentLoaded", finalCall);