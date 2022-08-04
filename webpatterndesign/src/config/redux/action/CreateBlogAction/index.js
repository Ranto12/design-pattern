export const setForm = (formType, formValue) =>{
    return {type : 'CREATE_BLOG' , formType, formValue}
}

export const setImagePreview = (payload) =>{
    return {type : "SET_IMAGE_PREVIEW", payload}
}