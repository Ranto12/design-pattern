import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { BlogItems } from '../../component/molecules';
import {Button, Gap} from '../../component';
import { setDataBlog } from '../../config/redux/action';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDataBlog(counter));
  },[dispatch, counter])
  
  const handleprev=()=>{
    setCounter(counter <= 1 ? 1 : counter - 1);
  }
  const handlenext=()=>{
    // setCounter(counter+1)
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  }
  console.log(counter)
  
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
          date={item.createdAt}/>
      })}
      </div>
      <Gap height={20} />
      <div className='pagenation'>
        <Button name="Prev" onClick={handleprev}/>
        <Gap  width={20}/>
        <p className='infoSumPage'>{page.currentPage}/{page.totalPage}</p>
        <Gap width={20}/>
        <Button name="Next" onClick={handlenext}/>
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home