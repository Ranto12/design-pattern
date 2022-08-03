import './Upload.scss'
import {LogoLogin} from '../../../Assets'

const Upload = ({img, ...rest}) => {
  return (
    <div className='upload'>
        {img && <img className='image-privew' src={img} alt="privew"/> }
        <input type="file" {...rest}/>
    </div>
  )
}

export default Upload