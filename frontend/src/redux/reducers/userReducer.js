import { USER_LOAD_FAIL, 
    USER_LOAD_REQUEST, 
    USER_LOAD_RESET, 
    USER_LOAD_SUCCESS, 
    USER_LOGOUT_FAIL, 
    USER_LOGOUT_REQUEST, 
    USER_LOGOUT_RESET, 
    USER_LOGOUT_SUCCESS, 
    USER_SIGNIN_FAIL,
     USER_SIGNIN_REQUEST,
      USER_SIGNIN_SUCCESS,
      USER_SIGNUP_FAIL,
       USER_SIGNUP_REQUEST,
        USER_SIGNUP_SUCCESS,
         USER_SIIGNIN_RESET,
          USER_SIIGNUP_RESET } from "../constants/userConstant";

// Sign Up
export const userReducerSignUp = (state = {}, action) =>{
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true }
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                userSignUp: action.payload
            }
        case USER_SIGNUP_FAIL:
            return {
                loading: false,
                Error: action.payload
            }
        case USER_SIIGNUP_RESET:
            return {}
        default:
            return state;
    }
}

// sign In
export const userReducerSignIn = (state = {}, action) =>{
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true, userInfo: null, isAuthenticated: false }
        case USER_SIGNIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                isAuthenticated: true
            }
        case USER_SIGNIN_FAIL:
            return {
                loading: false,
                userInfo: null,
                isAuthenticated:false,
                Error: action.payload
            }
        case USER_SIIGNIN_RESET:
            return {}
        default:
            return state;
    }
}

// USER PROFILE
export const userReducerProfile = (state = {}, action) =>{
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return { loading: true, userInfo: null, isAuthenticated: false }
        case USER_LOAD_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                isAuthenticated: true
            }
        case USER_LOAD_FAIL:
            return {
                loading: false,
                userInfo: null,
                isAuthenticated:false,
                Error: action.payload
            }
        case USER_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

// LOG OUT REDUCER
export const userReducerLogout = (state = {}, action) =>{
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true }
        case USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        case USER_LOGOUT_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT_RESET:
            return {}
        default:
            return state;
    }
}