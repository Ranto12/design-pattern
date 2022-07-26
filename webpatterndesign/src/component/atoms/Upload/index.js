import './Upload.scss'
import {LogoLogin} from '../../../Assets'

const Upload = () => {
  return (
    <div className='upload'>
        <img className='image-privew' src={LogoLogin} alt="privew"/>
        <input type="file" />
    </div>
  )
}

export default Upload