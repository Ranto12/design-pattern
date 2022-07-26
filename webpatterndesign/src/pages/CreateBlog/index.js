import {Input, TextArea, Upload, Button, Gap} from '../../component'
import './CreateBlog.scss';

const CreateBlog = () => {
  return (
    <div className='blog-post'>
      <p className='title'>Create new Blog</p>
      <Input label="Post Title"/>
      <Upload />
      <TextArea label="Post Content"/>
      <Gap height={10}/>
      <div className='button-action'>
      <Button  name="save" />
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default CreateBlog