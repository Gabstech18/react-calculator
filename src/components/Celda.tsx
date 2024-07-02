
interface CeldaProps{
  children: string;
}

const Celda = ({children}: CeldaProps) => {
  return (
    <div>{children}</div>
  )
}

export default Celda
