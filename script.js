let container = document.createElement('div');
document.body.appendChild(container);
container.setAttribute("class", 'container-fluid');

let buttons = document.createElement("div");
container.appendChild(buttons);
buttons.setAttribute("class","calculator");

let display = document.createElement("input");
buttons.appendChild(display);
display.setAttribute("id","display");
display.setAttribute("type","text");

let remove = document.createElement("button");
buttons.appendChild(remove);
remove.setAttribute("id","remove");
remove.setAttribute("class","button");
remove.innerText = "<-";

let clear = document.createElement("button");
buttons.appendChild(clear);
clear.setAttribute("id","clear");
clear.setAttribute("class","button");
clear.innerText = "c";

let divide = document.createElement("button");
buttons.appendChild(divide);
divide.setAttribute("id","divide");
divide.setAttribute("class","button");
divide.innerText = "/";

let multiply = document.createElement("button");
buttons.appendChild(multiply);
multiply.setAttribute("id","multiply");
multiply.setAttribute("class","button");
multiply.innerText = "*";

let modulus = document.createElement("button");
buttons.appendChild(modulus);
modulus.setAttribute("id","modulus");
modulus.setAttribute("class","button");
modulus.innerText = "%";

let seven = document.createElement("button");
buttons.appendChild(seven);
seven.setAttribute("id","seven");
seven.setAttribute("class","button");
seven.innerText = "7";

let eight = document.createElement("button");
buttons.appendChild(eight);
eight.setAttribute("id","eight");
eight.setAttribute("class","button");
eight.innerText = "8";

let nine = document.createElement("button");
buttons.appendChild(nine);
nine.setAttribute("id","nine");
nine.setAttribute("class","button");
nine.innerText = "9";

let dot = document.createElement("button");
buttons.appendChild(dot);
dot.setAttribute("id","dot");
dot.setAttribute("class","button");
dot.innerText = ".";

let four = document.createElement("button");
buttons.appendChild(four);
four.setAttribute("id","four");
four.setAttribute("class","button");
four.innerText = "4";

let five = document.createElement("button");
buttons.appendChild(five);
five.setAttribute("class","five");
five.setAttribute("class","button");
five.innerText = "5";

let six = document.createElement("button");
buttons.appendChild(six);
six.setAttribute("class","six");
six.setAttribute("class","button");
six.innerText = "6";

let substract = document.createElement("button");
buttons.appendChild(substract);
substract.setAttribute("id","substract");
substract.setAttribute("class","button");
substract.innerText = "-";

let one = document.createElement("button");
buttons.appendChild(one);
one.setAttribute("id","one");
one.setAttribute("class","button");
one.innerText = "1";

let two = document.createElement("button");
buttons.appendChild(two);
two.setAttribute("id","two");
two.setAttribute("class","button");
two.innerText = "2";

let three = document.createElement("button");
buttons.appendChild(three);
three.setAttribute("id","three");
three.setAttribute("class","button");
three.innerText = "3";

let addition = document.createElement("button");
buttons.appendChild(addition);
addition.setAttribute("id","addition");
addition.setAttribute("class","button");
addition.innerText = "+";

let obracket = document.createElement("button");
buttons.appendChild(obracket);
obracket.setAttribute("id","obracket");
obracket.setAttribute("class","button");
obracket.innerText = "(";

let zero = document.createElement("button");
buttons.appendChild(zero);
zero.setAttribute("id","zero");
zero.setAttribute("class","button");
zero.innerText = "0";

let cbracket = document.createElement("button");
buttons.appendChild(cbracket);
cbracket.setAttribute("id","cbracket");
cbracket.setAttribute("class","button");
cbracket.innerText = ")";

let equalto = document.createElement("button");
buttons.appendChild(equalto);
equalto.setAttribute("id","equalto");
equalto.setAttribute("class","button");
equalto.innerText = "=";


let allButton = Array.from(document.getElementsByClassName("button"))
allButton.map(button=>{
    button.addEventListener('click',(e)=>{
       switch(e.target.innerText){
        case "c": display.value = "";
        break;
        case "<-": if(display.value){display.value = display.value.slice(0,-1);}
        break;
        case "=": if(display.value){
        try { display.value = eval(display.value);
            
        } catch { display.value = "error!"
            
        }
    }
        break;
        default: display.value += e.target.innerText;

       }

    })
})

display.addEventListener('keydown', (e) => {
    var name = event.key;
    var code = event.code;
    if(e.keyCode<47||e.keyCode>57){
        if(e.keyCode<96||e.keyCode>105){
         e.preventDefault(); //normal browsers
          e.returnValue = true;
          alert("Enter only numbers via keyboard");
        }
    }
  });
