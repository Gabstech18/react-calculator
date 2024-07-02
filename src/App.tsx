import Button from "./components/Button";
import Celda from "./components/Celda";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="block">
          <Celda>Gruñido</Celda>
        </div>
        <div className="containerContent">
          <Button onClick={() => console.log("Hola")}>1</Button>
          <Button onClick={() => console.log("Hola")}>2</Button>
          <Button onClick={() => console.log("Hola")}>3</Button>
          <Button onClick={() => console.log("Hola")}>+</Button>
          <Button onClick={() => console.log("Hola")}>4</Button>
          <Button onClick={() => console.log("Hola")}>5</Button>
          <Button onClick={() => console.log("Hola")}>6</Button>
          <Button onClick={() => console.log("Hola")}>-</Button>
          <Button onClick={() => console.log("Hola")}>7</Button>
          <Button onClick={() => console.log("Hola")}>8</Button>
          <Button onClick={() => console.log("Hola")}>9</Button>
          <Button onClick={() => console.log("Hola")}>/</Button>
          <Button onClick={() => console.log("Hola")}>.</Button>
          <Button onClick={() => console.log("Hola")}>0</Button>
          <Button onClick={() => console.log("Hola")}>*</Button>
          <Button onClick={() => console.log("Hola")}>=</Button>

        </div>
      </div>
    </>
  );
};

export default App;
