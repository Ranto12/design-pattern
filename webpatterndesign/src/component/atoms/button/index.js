import './button.scss'

const Button = ({name, ...rest}) => {
  return (
    <div >
      <button className='button' {...rest} >{name}</button>
    </div>
  )
}

export default Button
