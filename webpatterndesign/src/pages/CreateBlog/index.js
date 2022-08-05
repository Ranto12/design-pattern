import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {Input, TextArea, Upload, Button, Gap} from '../../component'
import './CreateBlog.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { postToAPI, setForm, setImagePreview, UpdateAPI } from '../../config/redux/action';
import  Axios  from 'axios';

const CreateBlog = () => {
  const {form, imagePreview} = useSelector(state => state.createBlogReducer);
  const {title, body, image} = form;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const params = useParams();
  const id = params.id;
  
  useEffect(()=>{
    if(id){
      setIsLoading(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then(res =>{
        const data = res.data.data;
        console.log(`http://localhost:4000/${res.data.data.image}`)
        dispatch(setForm('title', data.title));
        dispatch(setForm('body', data.body));
        dispatch(setForm('image', data.image));
        dispatch(setImagePreview(`http://localhost:4000/${data.image}`));
      })
      .catch(err =>{
        console.log(err)
      })
    }else{
      dispatch(setForm('title', ""));
      dispatch(setForm('body', ""));
      dispatch(setForm('image', ""));
      dispatch(setImagePreview(""));
    }
    },[id, dispatch])
  
  const handleSubmit = (e) => {
    if(id){
      console.log("update")
      UpdateAPI(id, form)
      
    }else{
      console.log("post")
      postToAPI(form);
    }
  }
  const handleImage=(e)=>{
    dispatch(setForm('image', e.target.files[0]));
    dispatch(setImagePreview(URL.createObjectURL(e.target.files[0])));
  }
  
  return (
    <div className='blog-post'>
      <p className='kembali' onClick={()=> navigate('/')}>kembali</p>
      <Gap height={20} />
      <p className='title'>{isloading ? "Update" : "Create New"} Blog Post</p>
      <Input label="Post Title" value={title} onChange={(e)=> dispatch(setForm('title', e.target.value))} type="text"/>
      <Upload onChange={handleImage} img={imagePreview}/>
      <TextArea label="Post Content" value={body} onChange={(e)=> dispatch(setForm('body', e.target.value))} />
      <Gap height={10}/>
      <div className='button-action'>
        <Button  name={isloading ? "UPDATE" : "SIMPAN"} onClick={handleSubmit}/>
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default CreateBlog