import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import configureStore from "./redux/configureStore";
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'


//provider is a higher order component that provides  your redux data to child components
import {Provider as ReduxProvider} from 'react-redux'
const store = configureStore();
const persistor = persistStore(store)
 ReactDOM.render(


            <ReduxProvider store={store}>
                <BrowserRouter>
                <PersistGate persistor={persistor}>
                <App/>
                </PersistGate>
                </BrowserRouter>
            </ReduxProvider>
        ,
        document.getElementById('root')
 );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
