import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import configureStore from "./redux/configureStore";

//provider is a higher order component that provides  your redux data to child components
import {Provider as ReduxProvider} from 'react-redux'

let  store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
      <HashRouter>
            <App />
      </HashRouter>
    </ReduxProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
