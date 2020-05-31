import {combineReducers} from "redux";
import homePageReducer from "./homePageReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
    homePageReducer,
    apiStatusReducer,

});
export default rootReducer;
