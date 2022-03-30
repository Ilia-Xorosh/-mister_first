import React from "react";
import {actions} from "../../../Redux/ProfileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {appStateType} from "../../../Redux/Redux-store";
import {PostType} from "../../../types/types";

let mapStateToProps = (state: appStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, appStateType>(
    mapStateToProps, {addPost: actions.addPostActionCreator})(MyPost)

export default MyPostContainer;


export type MapStatePropsType = { posts: Array<PostType> }
export type MapDispatchPropsType = { addPost: (newPostText: string) => void }