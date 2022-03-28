import {ResultCodeEnum} from "../api/Api"
import {FormAction, stopSubmit} from "redux-form"
import {PhotoType, PostType, ProfileType} from "../types/types"
import {BaseThunkType, InferActionType} from "./Redux-store"
import {usersAPI} from "../api/users-api"
import {profileAPI} from "../api/profile-api"



let initialState = {
    posts: [
        {id: 1, message: 'Hi, have are you?', likeCount: 5},
        {id: 2, message: 'It\'s my first post!', likeCount: 45}
    ] as Array<PostType>,
    profile: null as (null | ProfileType),
    status: '' as string
}

const profileReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case "profile/ADD-POST":
            let newPost = {
                id: 3,
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case "profile/DELETE-POST":
                    return {
                        ...state,
                        posts: state.posts.filter(p => p.id != action.postId)
                    }
        case "profile/SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "profile/SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "profile/SAVE-PHOTO-SUCCESS":
            return {
                ...state,
        profile: {...state.profile , photos: action.photos} as ProfileType
            }

        default:
            return state
    }
};

export const actions = {
addPostActionCreator: (newPostText: string) => ({ type: 'profile/ADD-POST', newPostText } as const),
deletePost: (postId: number) => ({ type: 'profile/DELETE-POST', postId } as const),
setUserProfile: (profile: ProfileType) => ({ type: 'profile/SET-USER-PROFILE', profile} as const),
_setStatus: (status: string) => ({ type: 'profile/SET-STATUS', status} as const),
_savePhotoSuccess: (photos: PhotoType) => ({ type: 'profile/SAVE-PHOTO-SUCCESS', photos} as const)
}

export const getUserProfile = (userId: number):ThunkType => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
        dispatch(actions.setUserProfile(response.data));
}

export const getStatus = (userId: number):ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
        dispatch(actions._setStatus(response.data))
}

export const updateStatus = (status: string):ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions._setStatus(status))
        }
}

export const savePhoto = (file: PhotoType):ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions._savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType):ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === ResultCodeEnum.Success) {
        if(userId != null) {
        dispatch(getUserProfile(userId))
        } else {
            throw new Error("UserId can't be null")
        }
    }
    else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;

type initialStateType = typeof initialState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType | FormAction>
