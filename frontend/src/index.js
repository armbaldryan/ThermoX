import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { BrowserRouter } from 'react-router-dom';

import reducer from './reducers';
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App
                title = "Thermox"
            />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);