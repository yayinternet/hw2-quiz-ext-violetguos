// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

const ans_1 = document.querySelectorAll('[data-question-id="one"]');

ans_1.forEach(
    function(currentValue, currentIndex, listObj) { 
        currentValue.addEventListener('click', function(){
            currentValue.style.backgroundColor = 'red';
        });
      }
);