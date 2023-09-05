import './style.css'
//import {add,subtract,multiply,divide,operate} from "./mathFunctions"
import {createButtons} from "./components"
 





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
const buttonContainer:HTMLDivElement = document.createElement('div');
buttonContainer.setAttribute('id','buttonContainer');
createButtons(buttonContainer);
container.appendChild(buttonContainer);


