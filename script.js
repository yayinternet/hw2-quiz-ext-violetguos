// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

const ans_w = document.querySelectorAll('[data-question-id="one"]');
const x = ans_w[0].querySelectorAll(".checkbox");

x[0].addEventListener('click', function(){
    x[0].style.backgroundColor = 'red';
});