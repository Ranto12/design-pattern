import './BlogItems.scss';
import {Button} from '../../';
import { useNavigate} from 'react-router';
const BlogItems = (props) => {
  const {title, author, body, image, date, _id, handleDelete} = props;
  const navigate = useNavigate();
  
  return (
    <div className='blog-items'>
        <img  className='image-tumn' src={image} alt="post"/>
        <div className='content-detail'>
            <div className='wrapper-title'>
              <div>
              <p className='title'>{title}</p>
              </div>
              <div className='edit-delete-wrapper'>
                <p className='edit' onClick={()=> navigate(`/create-blog/${_id}`)}>Edit </p>
                <p> | </p>
                <p className='delete' onClick={()=> handleDelete(_id)}> Delete</p>
              </div>
            </div>
            <p className='author'>{author} {date} </p>
            <p className='body'>{body}</p>
            <Button name="view detail" onClick={()=> navigate(`/detail-blog/${_id}`)}/>
        </div>
    </div>
  )
}

export default BlogItems