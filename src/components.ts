function addAttributes(button:HTMLButtonElement,content:string):HTMLButtonElement{
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

function createButton(content:string):HTMLButtonElement{
    let button:HTMLButtonElement = document.createElement('button');
        //returns button obj with classes, id, and EventListener based on content
        //all cButton, operators for opp id for certain operators
        //use classlist to do this
        button = addAttributes(button,content);
        return button;
  }

  
export function createButtons(buttonContainer:HTMLDivElement){
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
