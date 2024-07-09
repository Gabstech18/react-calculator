import { useState } from "react";
import Button from "./components/Button";
import Celda from "./components/Celda";

const App = () => {
  let operator = null

  const [ mess, setConcatMess] = useState('0.');
  const buttonClick = (val) => {
    if(val == '.' && mess.search(".")){
      setConcatMess(mess)
    }
    setConcatMess(mess + val);
  }
  const handleOperator = (val) => {

  }

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
          <Button onClick={() => handleOperator("*")}>*</Button>
          <Button onClick={() => handleOperator("=")}>=</Button>

        </div>
      </div>
    </>
  );
};

export default App;
