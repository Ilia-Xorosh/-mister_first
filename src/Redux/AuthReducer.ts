import {authAPI, securityAPI} from "../api/Api";
import {stopSubmit} from "redux-form";
import any = jasmine.any;

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null // If null, captcha is not requred.
}

type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;

    }
};

type setAuthUserDataPayloadActionType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataPayloadActionType
}
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA, payload: {userId, login, email, isAuth}});

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => async (dispatch: any) => {
    const response: any = await authAPI.me()

        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email, true));

    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    const response: any = await authAPI.loginPost(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            //Success, get auth data.
            dispatch(getAuthUserData());
        }
        else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: message}));
        }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response: any = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));

}

export const logOut = () => async (dispatch: any) => {
    const response: any = await authAPI.logOut()

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData(null, null, null, false));
        }
}

    export default authReducer;