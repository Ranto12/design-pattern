import Axios from 'axios';
import { URL } from '../../../../component/atoms/url';
export const setDataBlog= (page) => (dispatch) =>{
        Axios.get(`${URL}/blog/posts?page=${page}&perPage=2`)
        .then(result =>{
            const responseAPI = result.data;
            dispatch({
                type: "UPDATE_DATA_BLOG",
                payload: responseAPI.data
            })
            dispatch({
                type: "UPDATE_PAGE",
                payload: {
                    currentPage: responseAPI.currentPage,
                    totalPage: Math.ceil(responseAPI.totalData / responseAPI.perPage)
                }
            })
        })
        .catch(err =>{
            console.log(err);
        })
}