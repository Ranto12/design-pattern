import {LogoRegister} from '../../../Assets/index';
import {Button} from '../../';
import './BlogItems.scss';
import { useNavigate } from 'react-router';
const BlogItems = () => {
  const navigate = useNavigate();
  return (
    <div className='blog-items'>
        <img  className='image-tumn' src={LogoRegister} alt="post"/>
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Autohor - date Post</p>
            <p className='body'> lorem impsum  </p>
            <Button name="view detail" onClick={()=> navigate('/detail-blog')}/>
        </div>
    </div>
  )
}

export default BlogItems