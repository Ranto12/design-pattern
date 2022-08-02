import { BlogItems } from '../../component/molecules';
import {Button, Gap} from '../../component'
import './Home.scss';
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Axios  from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/v1/blog/posts')
    .then(res => {
        setBlogItems(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  console.log(blogItems)
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button name="Create Blog" onClick={() => navigate('/create-blog')}/>
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
      {blogItems.map(item=>{
        return <BlogItems 
                        key={item._id} 
                        title={item.title} 
                        body={item.body} 
                        author={item.author.name} 
                        date={item.createdAt}
                        image= {`http://localhost:4000/${item.image}`}
        />
      })}
      </div>
      <Gap height={20} />
      <div className='pagenation'>
        <Button name="Prev"/>
        <Gap  width={20}/>
        <Button name="Next"/>
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home