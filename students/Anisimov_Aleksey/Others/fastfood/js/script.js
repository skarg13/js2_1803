'use strict';
let allInputs = document.querySelectorAll('input');

allInputs.forEach(item => item.addEventListener('change', actionOnChange));


function actionOnChange() {
    console.log(event);
}