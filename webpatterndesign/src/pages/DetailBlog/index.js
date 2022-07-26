import {LogoRegister} from '../../Assets'
import { Gap } from '../../component';
import './DetailBlog.scss';

const DetailBlog = () => {
  return (
    <div className='detail-blog-wrapper'>
      <Gap height={20}/>
      <img className='img-cover' src={LogoRegister} alt="tumn"/>
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author - Date Post</p>
      <p className='blog-body'>Content Blog</p>
    </div>
  )
}

export default DetailBlog