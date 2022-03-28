import {getAuthUserData} from "./AuthReducer";
import {BaseThunkType, InferActionType} from "./Redux-store";

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {

        case 'app/SET-INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }

        default:
            return state

    }
}

export const actions = {
    initializedSuccess: () => ({ type: 'app/SET-INITIALIZED-SUCCESS' } as const)
}

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}



export default appReducer;

type initialStateType = typeof initialState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType, void>