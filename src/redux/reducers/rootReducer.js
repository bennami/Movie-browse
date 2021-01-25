import {combineReducers} from "redux";
import homePageReducer from "./homePageReducer";
import apiStatusReducer from "./apiStatusReducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['homePageReducer','apiStatusReducer']
}
const rootReducer = combineReducers({
    homePageReducer,
    apiStatusReducer,
});
export default persistReducer(persistConfig,rootReducer);
