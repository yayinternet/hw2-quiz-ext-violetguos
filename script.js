// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.






const ans_1 = document.querySelectorAll('[data-question-id="one"]');
let q1_selected_box;


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


ans_1.forEach(
    function(currentValue, currentIndex, listObj) { 
        currentValue.addEventListener('click', function(){
            currentValue.style.backgroundColor = '#cfe3ff';
            q1_selected_box = currentValue;
            console.log(q1_selected_box.dataset.choiceId);
            winner(q1_selected_box.dataset.choiceId);
        });
      }
);


