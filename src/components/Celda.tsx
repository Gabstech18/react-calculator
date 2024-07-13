interface CeldaProps {
  children: string;
  color?: "black" | "gray" | "green" | "red";
}

const Celda = ({ children, color = "black" }: CeldaProps) => {
  return <div className={"back-" + color}>{children}</div>;
};

export default Celda;
