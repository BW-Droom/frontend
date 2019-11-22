import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// react router dom
import { BrowserRouter as Router } from 'react-router-dom'
//redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// redux store
const store = createStore( applyMiddleware(thunk, logger))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));