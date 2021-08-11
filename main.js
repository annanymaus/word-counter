// splits string from text box, stores length of resultant list in 'listOfCounts' list
// input --> string from each textarea
// returns list of word counts
function eachWordcount() {
    let collectiveTextboxes = document.getElementsByClassName("input-box");
    let listOfCounts = [];
    for(let i = 0; i < collectiveTextboxes.length; i++) {
        if (collectiveTextboxes[i].value !== "") {
            listOfCounts.push(collectiveTextboxes[i].value.trim().split(/\s+/).length);
        }
    }
    return listOfCounts;
}


// adds all elements of a given list
// input --> list from eachWordCount()
// returns sum of all elements
function totalWordCount(listOfWordCounts) {
    let sum = 0;
    for (i = 0; i < listOfWordCounts.length; i++) {
        sum = sum + listOfWordCounts[i];
    }
    return sum;
}


// updates 'count' dom element
// input --> number; sum of no. of words from all textareas
function updateCount(sum) {
    let count = document.getElementById("count");
    count.innerText = sum;
}

// calls all functions
function finalCall() {
    let step1 = eachWordcount();
    console.log("step1", step1);
    let step2 = totalWordCount(step1);
    console.log("step2", step2);
    updateCount(step2);
}

// 'Generate' button event handler
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
    let a = document.getElementById("textbox-number");
    let b = Number(a.value);
    let c = '';
    for (j = 0; j < b; j++) {
        let textbox = '<textarea class="input-box"></textarea>';
        c = c + textbox;
    }

    let d = document.getElementById("text-areas");
    d.innerHTML = c;

    let collectiveTextboxes = document.getElementsByClassName("input-box");
    for(let i = 0; i < collectiveTextboxes.length; i++) {
        collectiveTextboxes[i].addEventListener("keyup", finalCall);
    }
});

document.addEventListener("DOMContentLoaded", finalCall);