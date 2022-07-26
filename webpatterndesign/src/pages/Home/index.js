import { BlogItems } from '../../component/molecules';
import {Button, Gap} from '../../component'
import './Home.scss';
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button name="Create Blog" onClick={() => navigate('/create-blog')}/>
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
      <BlogItems />
      <BlogItems />
      <BlogItems />
      <BlogItems />
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