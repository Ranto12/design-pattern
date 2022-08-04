import { useState } from 'react';
import { useNavigate } from 'react-router';
import {Input, TextArea, Upload, Button, Gap} from '../../component'
import './CreateBlog.scss';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setForm, setImagePreview } from '../../config/redux/action';

const CreateBlog = () => {
  const {form, imagePreview} = useSelector(state => state.createBlogReducer);
  const {title, body, image} = form;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (e) => {
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
    dispatch(setForm('image', e.target.files[0]));
    dispatch(setImagePreview(URL.createObjectURL(e.target.files[0])));
  }
  console.log(image, title, body)
  return (
    <div className='blog-post'>
      <p className='kembali' onClick={()=> navigate('/')}>kembali</p>
      <Gap height={20} />
      <p className='title'>Create new Blog</p>
      <Input label="Post Title" value={title} onChange={(e)=> dispatch(setForm('title', e.target.value))} type="text"/>
      <Upload onChange={handleImage} img={imagePreview}/>
      <TextArea label="Post Content" value={body} onChange={(e)=> dispatch(setForm('body', e.target.value))} />
      <Gap height={10}/>
      <div className='button-action'>
        <Button  name="save" onClick={handleSubmit}/>
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default CreateBlog