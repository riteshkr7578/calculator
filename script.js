let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let output = "";
let arr = Array.from(buttons);  //it will create an array of the buttons
arr.forEach(button => {
    button.addEventListener('click', (myFunction) => {
        if (myFunction.target.innerHTML == '=') {
            output = eval(output);
            input.value = output;
        }

        else if (myFunction.target.innerHTML == 'AC') {
            output = "";
            input.value = output;
        }
        else if (myFunction.target.innerHTML == 'DEL') {
            output = output.substring(0, output.length - 1);
            input.value = output;
        }
        else {
            output += myFunction.target.innerHTML;
            input.value = output;
        }

    })
})