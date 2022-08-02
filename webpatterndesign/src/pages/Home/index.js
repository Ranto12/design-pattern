import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { BlogItems } from '../../component/molecules';
import {Button, Gap} from '../../component';
import { setDataBlog } from '../../config/redux/action';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const {dataBlog} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog());
  },[dispatch])

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button name="Create Blog" onClick={() => navigate('/create-blog')}/>
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
      {dataBlog.map(item=>{
        return <BlogItems 
                        key={item._id}
                        image= {`http://localhost:4000/${item.image}`}
                        author={item.author && item.author.name} 
                        title={item.title} 
                        body={item.body} 
                        date={item.createdAt}
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