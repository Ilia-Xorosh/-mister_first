import React from "react";
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../Redux/Profile-reduser";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostConteiner = () => {
    /*let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onChangPost = (text) => {
        let action = apdateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }*/

    return (
        <StoreContext.Consumer>
            {
                (store) =>
                {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onChangPost = (text) => {
                        let action = apdateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return <MyPost
                        apdateNewPostText={onChangPost}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}


export default MyPostConteiner;