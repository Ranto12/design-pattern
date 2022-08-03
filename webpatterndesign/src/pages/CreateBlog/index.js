import { useState } from 'react';
import { useNavigate } from 'react-router';
import {Input, TextArea, Upload, Button, Gap} from '../../component'
import './CreateBlog.scss';
import Axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [imagePrivew, setImagePrivew] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    // console.log('title: ', title);
    // console.log('body: ', body);
    // console.log('image: ', image);
    const data = new FormData();
    data.append('image', image);
    data.append('title', title)
    data.append('body', body)

    Axios.post('http://localhost:4000/v1/blog/post', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res =>{
      console.log( "success", res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const handleImage=(e)=>{
    setImage(e.target.files[0])
    setImagePrivew(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className='blog-post'>
      <p className='kembali' onClick={()=> navigate('/')}>kembali</p>
      <Gap height={20} />
      <p className='title'>Create new Blog</p>
      <Input label="Post Title" value={title} onChange={(e)=> setTitle(e.target.value)} type="text"/>
      <Upload onChange={handleImage} img={imagePrivew}/>
      <TextArea label="Post Content" value={body} onChange={(e)=> setBody(e.target.value)} />
      <Gap height={10}/>
      <div className='button-action'>
        <Button  name="save" onClick={handleSubmit}/>
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default CreateBlog