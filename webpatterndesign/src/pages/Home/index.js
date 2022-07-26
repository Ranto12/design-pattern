import React from 'react'
import {Button, Gap} from '../../component'
import { BlogItems } from '../../component/molecules';
import './Home.scss';
const Home = () => {
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button name="Create Blog"/>
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