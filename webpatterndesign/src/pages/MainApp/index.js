import { Routes, Route} from 'react-router-dom';
import { Footer, Header } from '../../component/molecules';
import './MainApp.scss';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import React from 'react';

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
        <Header />
      <div className='content-wrapper'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail-blog" element={<DetailBlog />} />
          <Route path="/create-blog" element={<CreateBlog />} />  
        </Routes>
      </div>
        <Footer/>
    </div>
  )
}

export default MainApp