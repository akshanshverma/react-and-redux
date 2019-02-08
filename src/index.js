import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";


//define state of user 
const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    //type of action to perform 
    switch (action.type) {
        case "SET_NAME":
            console.log("setname",action)
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

//create store which hold reducer, we make many reducer to combine them we use combineReducers of redux and pass in store 
const store = createStore(userReducer);


ReactDOM.render(
    //provider provide components store which hold state
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
