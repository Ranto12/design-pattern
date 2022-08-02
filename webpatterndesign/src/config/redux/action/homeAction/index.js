import Axios from 'axios';
export const setDataBlog= () => (dispatch) =>{
        Axios.get("http://localhost:4000/v1/blog/posts")
        .then(result =>{
            const responseAPI = result.data;
            console.log(responseAPI)
            dispatch({
                type: "UPDATE_DATA_BLOG",
                payload: responseAPI.data
            })
        })
        .catch(err =>{
            console.log(err);
        })
}