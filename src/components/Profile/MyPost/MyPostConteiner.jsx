import React from "react";
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../Redux/Profile-reduser";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        apdateNewPostText: (text) => {
            let action = apdateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostConteiner;