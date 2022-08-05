import { Routes, Route} from 'react-router-dom';
import { Footer, Header } from '../../component/molecules';
import './MainApp.scss';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
        <Header />
      <div className='content-wrapper'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`create-blog`} element={<CreateBlog />} /> 
          <Route path="create-blog/:id" element={<CreateBlog />} />
          {/* <Route path={`/create-blog/(exact)?/id`} component={CreateBlog} /> */}
          <Route path="/Detail-blog/:id" element={<DetailBlog />} />
        </Routes>
      </div>
        <Footer/>
    </div>
  )
}

export default MainApp