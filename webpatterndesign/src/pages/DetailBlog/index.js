import  Axios  from 'axios';
import { useEffect, useState } from 'react';
import {  useNavigate , useParams  } from 'react-router';
import {  Gap } from '../../component';
import './DetailBlog.scss';

const DetailBlog = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const id = params.id;
  
  useEffect(()=>{
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
    .then(res=>{
      console.log("succes")
      setData(res.data.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [id])


  if(!data){
    return <div>Loading</div>
  } else{
    return (
      <div className='detail-blog-wrapper'>
        <img className='img-cover' src={`http://localhost:4000/${data.image}`} alt="tumn"/>
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>{data.author && data.author.name } - {data.createdAt}</p>
        <p className='blog-body'>{data.body}</p>
        <div className="button-back">
          <p className='back' onClick={()=>navigate('/')}>kemabli ke home</p>
        </div>
        <Gap height={20}/>
      </div>
    )
  }
}

export default DetailBlog