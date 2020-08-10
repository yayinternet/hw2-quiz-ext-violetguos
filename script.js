// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.



const ans_1 = document.querySelectorAll('[data-question-id="one"]');
let q1_selected_box;
const q1_unselected_box = [];

for(const box of ans_1){
    box.addEventListener('click', click_answer);
    q1_unselected_box.push(box);
}


function winner(choice){
    let article_content = document.querySelector('article');
    let result_section = document.createElement('section');
    let header = document.createElement('h1');
    let ans_header = document.createTextNode("You got: " + RESULTS_MAP[choice]["title"]); 
    let ans_description = document.createTextNode(RESULTS_MAP[choice]["contents"]);
    let ans_paragraph = document.createElement('p');

    
    ans_paragraph.appendChild(ans_description);
    header.appendChild(ans_header);
    result_section.appendChild(header);
    result_section.append(ans_paragraph);

    article_content.appendChild(result_section);
    
}

function removeElem(array, elem){
    const index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

function changeOpaque(array){
    for (const elem of array){
        elem.style.opacity = '0.6';
    }
}

function click_answer(event){
    const img_div = event.currentTarget;
    img_div.style.backgroundColor = '#cfe3ff';
    q1_selected_box = img_div;
    console.log(q1_selected_box.dataset.choiceId);
    removeElem(q1_unselected_box, img_div);
    changeOpaque(q1_unselected_box);
    winner(q1_selected_box.dataset.choiceId);
}


