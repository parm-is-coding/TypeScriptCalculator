function add (num1:number, num2:number){
    return num1 + num2;
  }
  function subtract(num1:number, num2:number){
    return num1 - num2;
  }
  function multiply(num1:number,num2:number){
    return num1 * num2;
  }
  function divide(num1:number,num2:number){
    return num1/num2;
  }

  function operate(num1:number,opp:string,num2:number){
    if(opp === "+"){
        return add(num1,num2);
    }else if(opp === "-"){
        return subtract(num1,num2);
    }else if (opp === "*"){
        return multiply(num1,num2);
    }else if (opp === "/"){
        return divide(num1,num2);
    }else{
        console.log("Invalid Input");
    }
  } 
  export {add,subtract,multiply,divide,operate};