let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == "="){

            input.value=eval(input.value);

            input.focus();

        }else if(e.target.innerHTML == "AC"){

            input.value="";

            input.focus();

        }else if(e.target.innerHTML == "C"){

            input.value=input.value.substring(0,input.value.length - 1);

            input.focus();

        }else{

            input.value += e.target.innerHTML;

            input.focus();
        }
    })
})