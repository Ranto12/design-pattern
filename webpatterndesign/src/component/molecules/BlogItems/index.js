import './BlogItems.scss';
import {Button} from '../../';
import { useNavigate } from 'react-router';
const BlogItems = (props) => {
  const {title, author, body, image, date} = props;
  const navigate = useNavigate();
  return (
    <div className='blog-items'>
        <img  className='image-tumn' src={image} alt="post"/>
        <div className='content-detail'>
            <p className='title'>{title}</p>
            <p className='author'>{author} {date} </p>
            <p className='body'>{body}</p>
            <Button name="view detail" onClick={()=> navigate('/detail-blog')}/>
        </div>
    </div>
  )
}

export default BlogItems