interface ButtonProps{
  className: string;
  children: string;
  onClick: () => void;
}

const Button = ({children, onClick, className}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default Button
