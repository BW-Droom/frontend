import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// react router dom
import { BrowserRouter as Router } from 'react-router-dom'
//redux 
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {reducer as employeeReducer} from './components/reducers/getEmployees';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    employee: employeeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));