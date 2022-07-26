import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
// const initialState = {
//     dataBlog : [{
//     }],
//     name : "ranto"
// }

//funtion yang akan mengirimkan sebuah value atau state
// nilai state adalah value yang akan digunakan di seleuruh hamalan
// const reducer = (state = initialState, action)=>{
//     if(action.type === "UPDATE_DATA_BLOG"){
//         return{
//             ...state,
//             dataBlog : action.payload
//         }
//     }
//     return state;
// }
//menyediakan store untuk bisa di gunanakan dimana saja