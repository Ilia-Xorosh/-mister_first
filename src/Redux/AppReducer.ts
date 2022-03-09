import {getAuthUserData} from "./AuthReducer";

const SET_INITIALIZED_SUCCESS = 'app/SET-INITIALIZED-SUCCESS';


let initialState = {
    initialized: false
}

type initialStateType = typeof initialState

const appReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;

    }
};

type initializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
}



    export default appReducer;