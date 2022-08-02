import { combineReducers } from "redux";
import globalReducer from "./GlobalReducer";
import homeReducer from "./Homereducer";


const reducer = combineReducers({globalReducer, homeReducer});
export default reducer;