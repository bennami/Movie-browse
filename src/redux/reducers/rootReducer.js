import {combineReducers} from "redux";
import homePageReducer from "./homePageReducer";
import apiStatusReducer from "./apiStatusReducer";
import searchReducer from "./searchReducer"
const rootReducer = combineReducers({
    homePageReducer,
    apiStatusReducer,
    searchReducer
});
export default rootReducer;
