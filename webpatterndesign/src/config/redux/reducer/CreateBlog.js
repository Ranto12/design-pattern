const initialState = {
    form : {
        title : "",
        body : "",
        image : "",
    },
    imagePreview : null
}

const createBlogReducer = (state = initialState, action) =>{
    if(action.type === "CREATE_BLOG"){
        return{
            ...state,
            form: {
                ...state.form,
                [action.formType] : action.formValue
            }
        }
    }

    if(action.type === "SET_IMAGE_PREVIEW"){
        return{
            ...state,
            imagePreview : action.payload
        }
    }
    return state;
}

export default createBlogReducer;