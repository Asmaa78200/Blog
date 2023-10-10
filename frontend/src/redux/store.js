import {ereaseStore, combineReducers, applyMiddleware }from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducerLogout, userReducerProfile, userReducerSignIn, userReducerSignUp } from './reducers/userReducer';

//combine reducers
const reducer= combinereducers ({
    signUp: userReducerSignUp,
    signIn: userReducerSignIn,
    userProfile: userReducerProfile,
    logOut:userReducerLogout
});

// initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    }
}

const middleware = [thunk];

const store = ereateStore(reducer, initialSate, composeWithDevTools(applyMiddleware(...middleware)))


export default store;