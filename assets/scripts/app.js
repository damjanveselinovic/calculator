const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function logObject(operator, resultBeforeCalc, calcNumber) {
  const logEntry = {
    operation: operator,
    prevResult: resultBeforeCalc,
    number: calcNumber,
    newResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function calculateResult(operator) {
  const enteredNumber = parseInt(userInput.value);
  if(!enteredNumber){
    return;
  }

  const initialResult = currentResult;
  let mathSign;
  if (operator == "ADD") {
    currentResult += enteredNumber;
    mathSign = "+";
  } else if (operator == "SUBTRACT") {
    currentResult -= enteredNumber;
    mathSign = "-";
  } else if(operator=="MULTIPLY"){
    currentResult *= enteredNumber;
    mathSign = "*";
  } else{
    currentResult /= enteredNumber;
    mathSign = "/";
  }
  createAndWriteOutput(mathSign, initialResult, enteredNumber);
  logObject(operator, initialResult, enteredNumber);
}
/*
function add() {
  const enteredNumber = parseInt(userInput.value); //da ne bismo morali da menjamo svuda ako se userInput naziv promeni u vendoru, sad je vise flexable
  const initialResult = currentResult;
  //calcDesc = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber;
  //outputResult(currentResult, calcDesc);
  createAndWriteOutput("+", initialResult, enteredNumber);
  //const logEntry = {
    //operation: "ADD",
    //prevResult: initialResult,
    //number: enteredNumber,
    //newResult: currentResult,
  //};
  //logEntries.push(enteredNumber);         //broj
  //logEntries.push(logEntry); //objekat
  //console.log(logEntry.operation);
  //console.log(logEntries);
  logObject("ADD", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  logObject("SUBTRACT", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  logObject("MULTIPLY", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  logObject("DIVIDE", initialResult, enteredNumber);
}
*/

function add(){
  calculateResult('ADD');
}
function subtract(){
  calculateResult('SUBTRACT');
}
function multiply(){
  calculateResult('MULTIPLY');
}
function divide(){
  calculateResult('DIVIDE');
}




addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//currentResult = (currentResult + 10) * 3;

//let calculationDescription = "(" + defaultResult + " + 10) * 3";
//let calculationDescription2 = `(${defaultResult} + 10) * 3`;
