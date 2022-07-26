import React from 'react'
import {Button, Gap} from '../../component'
import './Home.scss';
const Home = () => {
  return (
    <div className='home-page-wrapper'>
      {/* <Gap height={20}/> */}
      <div className='create-wrapper'>
        <Button name="Create Blog"/>
      </div>
      <p>Blog content</p>
      <p>Blog content</p>
      <p>Blog content</p>
      <p>Blog content</p>
      <p>Pagenation</p>
    </div>
  )
}

export default Home