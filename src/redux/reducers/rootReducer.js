import {combineReducers} from "redux";
import homePageReducer from "./homePageReducer";
import apiStatusReducer from "./apiStatusReducer";
function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch (e) {
        console.log(e)
        return undefined
    }
}
const persistedState = loadFromLocalStorage()
const rootReducer = combineReducers({
    homePageReducer,
    apiStatusReducer,
    persistedState,

});
export default rootReducer;
