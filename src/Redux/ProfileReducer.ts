import {profileAPI, usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form";
import {PhotoType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';



let initialState = {
    posts: [
        {id: 1, message: 'Hi, have are you?', likeCount: 5},
        {id: 2, message: 'It\'s my first post!', likeCount: 45}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string | null
}
type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };

                case DELETE_POST:
                    return {
                        ...state,
                        posts: state.posts.filter(p => p.id != action.postId)
                    };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType
            };

        default:
            return state;

    }
};

type addPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): addPostActionCreatorActionType => ({ type: ADD_POST, newPostText });
type deletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): deletePostActionType => ({ type: DELETE_POST, postId });
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({ type: SET_USER_PROFILE, profile});
type setStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
const setStatus = (status: string): setStatusActionType => ({ type: SET_STATUS, status});
type savePhotoSuccessActionType = {
    type: typeof SET_STATUS
    photos: PhotoType
}
const savePhotoSuccess = (photos: PhotoType): savePhotoSuccessActionType => ({ type: SET_STATUS, photos});


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response: any = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response: any = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response: any = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
        }
}

export const savePhoto = (file: PhotoType) => async (dispatch: any) => {
    const response: any = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response: any = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
    else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;