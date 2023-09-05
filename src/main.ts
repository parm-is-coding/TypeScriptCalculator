import './style.css'
import {add,subtract,multiply,divide,operate} from "./mathFunctions"

//consider using a switch statement
 
function addAttributes(button:HTMLButtonElement,content:string){
  button.classList.add("cButton");
  button.textContent = content
  switch (content) {
      case "+":
          button.setAttribute('id','add');
          button.classList.add("operator");
          
          break;
      case "-":
          button.setAttribute('id','subtract');
          button.classList.add("operator");
          
          break;
      case "*":
          button.setAttribute('id','multiply');
          button.classList.add("operator");
          break;
      case "/":
          button.setAttribute('id', "divide");
          button.classList.add("operator");
          break;
      case "=":
          button.setAttribute('id',"equal");
          button.classList.add("operator");
          break;
      case ".":
          button.setAttribute('id',"dot");
          button.classList.add("operator");
          break;
      default:
          break;
  }
  return button
}

// using classlist we can add multiple classes at time 
// with the  in content we can check for operators at this level
//simplifying code
function createButton(content:string){
  let button = document.createElement('button');
      //returns button obj with classes, id, and EventListener based on content
      //all cButton, operators for opp id for certain operators
      //use classlist to do this
      button = addAttributes(button,content);
      return button;
}

function createButtons(){
  for (let i = 9; i >=0; i--){
      buttonContainer.appendChild(createButton(String(i)));
      if(i == 7){
          let button = createButton("+");
          buttonContainer.appendChild(button);
      }else if(i == 4){
          let button = createButton("-");
          buttonContainer.appendChild(button);
      }else if(i == 1){
          let button = createButton("*");
          buttonContainer.appendChild(button);
      }
  }
  const dot = createButton(".");
  const equal = createButton("=");
  const divide = createButton("/");
  buttonContainer.appendChild(dot);
  buttonContainer.appendChild(equal);
  buttonContainer.appendChild(divide);
 
  
}



//put this garbage in a function to clean it up
const container:Element|null = document.querySelector("#container");
if(container == null){
  throw new Error("no element has the id container in index.html")
}
// add screen to calculator
const screen = document.createElement("div");
screen.setAttribute('id',"screen");
container.appendChild(screen);
// add buttonContainer to Calculator
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id','buttonContainer');
createButtons();
container.appendChild(buttonContainer);

// button Eventlistener
const button = document.querySelectorAll('button');

