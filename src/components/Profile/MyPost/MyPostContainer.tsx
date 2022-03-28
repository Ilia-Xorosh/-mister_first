import React from "react";
import {actions} from "../../../Redux/ProfileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {appStateType} from "../../../Redux/Redux-store";
import {PostType} from "../../../types/types";

type OwnPropsType = {
}

type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}


let mapStateToProps = (state: appStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(actions.addPostActionCreator(newPostText))
        }
    }
}

const MyPostContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, appStateType>(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;