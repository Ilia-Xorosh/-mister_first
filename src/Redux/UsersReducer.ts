import {ResultCodeEnum} from "../api/Api"
import {updateObjectInArray} from "../Utils/object-helpers"
import {UserType} from "../types/types"
import {BaseThunkType, InferActionType} from "./Redux-store"
import {Dispatch} from "redux"
import {usersAPI} from "../api/users-api"

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>
}

const usersReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "users/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case"users/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case "users/SET-USERS": {
            return {...state, users: action.users}
        }
        case "users/SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "users/SET_USERS-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "users/TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "users/TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const actions = {
followSuccess: (userId: number) => ({type: "users/FOLLOW", userId} as const),
unfollowSuccess: (userId: number) => ({type: "users/UNFOLLOW", userId} as const),
setUsers: (users: Array<UserType>) => ({type: "users/SET-USERS", users} as const),
setCurrentPage: (currentPage: number) => ({
    type: "users/SET-CURRENT-PAGE",
    currentPage
} as const),
setTotalUsersCount: (totalUsersCount: number) => ({
    type: "users/SET_USERS-TOTAL-COUNT",
    count: totalUsersCount
} as const),
toggleIsFetching: (isFetching: boolean) => ({
    type: "users/TOGGLE-IS-FETCHING",
    isFetching
} as const),
toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
    type: "users/TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId
} as const)
}

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage));

        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => ActionType) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}

export default usersReducer;

type initialStateType = typeof initialState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType>
type DispatchType = Dispatch<ActionType>