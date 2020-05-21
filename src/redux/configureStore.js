import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from "redux-thunk";
import logger from 'redux-logger'
export default function configureStore(initialState) {

    //this adds support for redux dev tools, this const gives us a funtion that we can call
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk,logger,reduxImmutableStateInvariant()))
    );
}
//configureStore takes in initial state as parameter so we have some data
//middleware  is  a way to enhance redux with extra functionality, 3rd parameter for create store  accepts the middlewarefunction
//reduxImmutableStateInvariant() will warn you if you accidentally mutate  any state directly inside the store
