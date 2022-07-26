import { Routes, Route} from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import React from 'react';

const MainApp = () => {
  return (
    <div>
        <p>Hader</p>
               <Routes>
                <Route path="/Detail-blog" element={<DetailBlog />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/create-blog" element={<CreateBlog />} />  
               </Routes>
        <p>Footer</p>
    </div>
  )
}

export default MainApp