import { combineReducers } from "redux";
import globalReducer from "./GlobalReducer";
import homeReducer from "./Homereducer";
import createBlogReducer from "./CreateBlog";

const reducer = combineReducers({globalReducer, homeReducer, createBlogReducer});
export default reducer;