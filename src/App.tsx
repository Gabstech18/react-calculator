import { useState } from "react";
import Button from "./components/Button";
import Celda from "./components/Celda";

const App = () => {
  const [mess, setConcatMess] = useState("0");
  const [numBuffer, addNumBuffer] = useState(0);
  const [operatorClicked, setOperatorClicked] = useState("");
  const [wasOperatorClicked, setClicked] = useState(false);
  let operators = ["+", "-", "/", "*", "="];

  const buttonClick = (val) => {
    if (wasOperatorClicked) {
      setConcatMess(val);
      setClicked(false);
    } else if (val === "." && mess.includes(".")) {
      setConcatMess(mess);
    } else if (val === "0" && mess[0] != "0") {
      setConcatMess(mess + val);
    } else if (mess === "0" && val != ".") {
      setConcatMess(val);
    } else if (operators.includes(mess[0])) {
      setConcatMess(val);
    } else {
      setConcatMess(mess + val);
    }
  };

  const handleOperator = (operator) => {
    switch (operator) {
      case "+":
        setOperatorClicked(operator);
        addNumBuffer(Number(mess));
        setClicked(true);
        break;
      case "-":
        setOperatorClicked(operator);
        addNumBuffer(Number(mess));
        setClicked(true);
        break;
      case "*":
        setOperatorClicked(operator);
        addNumBuffer(Number(mess));
        setClicked(true);
        break;
      case "/":
        setOperatorClicked(operator);
        addNumBuffer(Number(mess));
        setClicked(true);
        break;
      case "=":
        setClicked(true);
        switch (operatorClicked) {
          case "+":
            setConcatMess(String(numBuffer + Number(mess)));
            addNumBuffer(numBuffer + Number(mess));
            break;
          case "-":
            setConcatMess(String(numBuffer - Number(mess)));
            addNumBuffer(numBuffer - Number(mess));
            break;
          case "*":
            setConcatMess(String(numBuffer * Number(mess)));
            addNumBuffer(numBuffer * Number(mess));
            break;
          case "/":
            setConcatMess(String(numBuffer / Number(mess)));
            addNumBuffer(numBuffer / Number(mess));
            break;
          default:
            break;
        }
        setOperatorClicked(operator);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="container">
        <div className="block">
          <Celda>{mess}</Celda>
        </div>
        <div className="containerContent">
          <Button onClick={() => buttonClick("1")}>1</Button>
          <Button onClick={() => buttonClick("2")}>2</Button>
          <Button onClick={() => buttonClick("3")}>3</Button>
          <Button onClick={() => handleOperator("+")}>+</Button>
          <Button onClick={() => buttonClick("4")}>4</Button>
          <Button onClick={() => buttonClick("5")}>5</Button>
          <Button onClick={() => buttonClick("6")}>6</Button>
          <Button onClick={() => handleOperator("-")}>-</Button>
          <Button onClick={() => buttonClick("7")}>7</Button>
          <Button onClick={() => buttonClick("8")}>8</Button>
          <Button onClick={() => buttonClick("9")}>9</Button>
          <Button onClick={() => handleOperator("/")}>/</Button>
          <Button onClick={() => buttonClick(".")}>.</Button>
          <Button onClick={() => buttonClick("0")}>0</Button>
          <Button onClick={() => handleOperator("*")}>x</Button>
          <Button onClick={() => handleOperator("=")}>=</Button>
        </div>
        <div>{numBuffer}</div>
      </div>
    </>
  );
};

export default App;
