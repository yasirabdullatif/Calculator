let main_div = document.querySelector("#main_div");
let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

let array_buttons = Array.from(buttons);

let output = '';

array_buttons.forEach(btn => {


    btn.addEventListener('click', (e) => {

        if (e.target.innerText == 'A') {
            output = '';
            display.value = output;

        } else if (e.target.innerText == 'D'){
            output = output.substring(0 , output.length-1)
            display.value = output;

        }else if(e.target.innerText == '='){

            output = eval(output);
            display.value = output;



        }else{
            output += e.target.innerText;
            display.value = output;
        }















    });

})




