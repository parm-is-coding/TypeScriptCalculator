import './style.css'
//import {add,subtract,multiply,divide,operate} from "./mathFunctions"
import {createButtons,createScreen} from "./components"
 






const container:Element|null = document.querySelector("#container");
if(container == null){
  throw new Error("no element has the id container in index.html")
}
createScreen(container);
// add buttonContainer to Calculator
createButtons(container);
container.appendChild(buttonContainer);


