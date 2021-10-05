import React from "react";
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../Redux/Profile-reduser";
import MyPost from "./MyPost";

const MyPostConteiner = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onChangPost = (text) => {
        let action = apdateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPost
            apdateNewPostText={onChangPost}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>)
}


export default MyPostConteiner;