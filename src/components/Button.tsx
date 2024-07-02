interface ButtonProps{
  element: string;
  onClick: () => void;
}

const Button = ({element, onClick}: ButtonProps) => {
  return (
    <div>Button</div>
  )
}

export default Button
