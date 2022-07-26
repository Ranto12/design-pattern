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
      <Gap height={50} />
      <div className='content-wrapper'>
      <BlogItems />
      <BlogItems />
      <BlogItems />
      <BlogItems />
      </div>
      <p>Pagenation</p>
    </div>
  )
}

export default Home