import {ResultCodeEnum, ResultCodeForCaptchaEnum} from "../api/Api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionType} from "./Redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null // If null, captcha is not requred.
}

const authReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {

        case "auth/SET-USER-DATA":
        case "auth/GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state

    }
}

export const actions = {
    setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'auth/SET-USER-DATA', payload: {userId, login, email, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: 'auth/GET-CAPTCHA-URL-SUCCESS', payload: {captchaUrl}} as const)
}

export const getAuthUserData = ():ThunkType => async (dispatch) => {
    const meData = await authAPI.me()

        if (meData.resultCode === ResultCodeEnum.Error) {
            let {id, login, email} = meData.data
            dispatch(actions.setAuthUserData(id, login, email, true))

    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any):ThunkType => async (dispatch) => {
    const data = await authAPI.loginPost(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodeEnum.Success) {
            //Success, get auth data.
            dispatch(getAuthUserData())
        }
        else {
            if (data.resultCode === ResultCodeForCaptchaEnum.captchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: message}))
        }
}

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url

    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))

}

export const logOut = ():ThunkType => async (dispatch) => {
    const data = await authAPI.logOut()
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
}

export default authReducer

type initialStateType = typeof initialState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType | FormAction>