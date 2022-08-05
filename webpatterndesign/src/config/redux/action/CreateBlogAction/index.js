import Axios from 'axios'
export const setForm = (formType, formValue) =>{
    return {type : 'CREATE_BLOG' , formType, formValue}
}

export const setImagePreview = (payload) =>{
    return {type : "SET_IMAGE_PREVIEW", payload}
}

export const postToAPI =(form)=>{
    const data = new FormData();
    data.append('image', form.image);
    data.append('title', form.title)
    data.append('body', form.body)
  
    Axios.post('http://localhost:4000/v1/blog/post', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res =>{
        console.log( "success post", res)
      })
      .catch(err=>{
        console.log(err)
      })
}

export const UpdateAPI =(id, form) =>{
  const data = new FormData();
    data.append('image', form.image);
    data.append('title', form.title)
    data.append('body', form.body)
  
    Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res =>{
        console.log( "success update", res)
      })
      .catch(err=>{
        console.log(err ,"error")
      })
}