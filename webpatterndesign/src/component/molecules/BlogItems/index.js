import {LogoRegister} from '../../../Assets/index';
import './BlogItems.scss';
const BlogItems = () => {
  return (
    <div className='blog-items'>
        <img  className='image-tumn' src={LogoRegister} alt="post"/>
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Autohor - date Post</p>
            <p className='body'> lorem impsum  </p>
        </div>
    </div>
  )
}

export default BlogItems