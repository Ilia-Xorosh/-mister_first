import {authAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;

    }
};


export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: {userId, login, email, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me()

        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email, true));

    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.loginPost(email, password, rememberMe)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: message}));
        }
}

export const logOut = () => async (dispatch) => {
    const response = await authAPI.logOut()

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData(null, null, null, false));
        }
}

    export default authReducer;