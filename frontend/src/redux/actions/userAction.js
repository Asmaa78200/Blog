import { USER_LOAD_FAIL, 
    USER_LOAD_REQUEST, 
    USER_LOAD_SUCCESS, 
    USER_LOGOUT_FAIL, 
    USER_LOGOUT_REQUEST, 
    USER_LOGOUT_SUCCESS, 
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST, 
    USER_SIGNUP_SUCCESS } from "../constants/userConstant";
import axios from 'axios';
import { toast } from "react-toastify";

//sign up Action
export const userSignUpAction = (user) => async (dispatch) =>{
    dispatch({ type:USER_SIGNUP_REQUEST});
    try{ 
        const { data } = await axios.post('/api/signup', user);
        localStorage.setItem('userInfo',JSON.stringify(data));
        dispatch({
            type:USER_SIGNUP_SUCCESS,
            payload: data
        });
        toast.success("Log In Successfully!");
    } catch (error) {
        dispatch ({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.reponse.data.error);
    }
}


//sign In Action
export const userSignInAction = (user) => async (dispatch) =>{
    dispatch({ type:USER_SIGNIN_REQUEST});
    try{
        const { data } = await axios.post('/api/signin', user);
        dispatch({
            type:USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Register Successfully!");
    } catch (error) {
        dispatch ({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.reponse.data.error);
    }
}


//user profile Action
export const userProfileAction = () => async (dispatch) =>{
    dispatch({ type:USER_LOAD_REQUEST});
    try{
        const { data } = await axios.post('/api/signin', user);
        dispatch({
            type:USER_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch ({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

//log out reducer
export const userReducerLogout = (state = {}, action) =>{
    switch(action.type){
    case USER_LOGOUT_REQUEST:
            return { loading:true } 
    case USER_LOGOUT_SUCCESS:
        return{
            loading: false,
            user: action.payload,
        }
    case USER_LOGOUT_FAIL:
        return{ loading: false, error: action.payload}
    case USER_LOGOUT_RESET:
        return {}
    default:
        return state;
}
}

//Log out Action
export const userLogoutAction = () => async (dispatch) =>{
    dispatch({ type:USER_LOGOUT_REQUEST});
    try{
        localStorage.removeItem('userInfo');
        const { data } = await axios.get('/api/logout');
        dispatch({
            type:USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Log out successfully!");
    } catch (error) {
        dispatch ({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.success(error.reponse.data.error);
    }
}

