const initialState = {
    name : "Ranto"
}

const globalReducer = (state = initialState, action) =>{
    if(action.type === "UPDATE_NAME"){
        return {
            ...state,
            name : "Ranto Koplak"
        }
    }
    return state;
}

export default globalReducer;