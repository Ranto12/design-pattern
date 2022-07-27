import { useNavigate } from 'react-router';
import {LogoRegister} from '../../Assets'
import { Button, Gap } from '../../component';
import './DetailBlog.scss';

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className='detail-blog-wrapper'>
      <Gap height={20}/>
      <img className='img-cover' src={LogoRegister} alt="tumn"/>
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author - Date Post</p>
      <p className='blog-body'>Content Blog</p>
      <div className="button-back">
      <Button name="back" onClick={()=>navigate('/')}/>
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default DetailBlog