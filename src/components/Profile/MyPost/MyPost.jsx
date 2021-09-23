import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../Redux/State";

const MyPost = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangPost = () => {
        let text = newPostElement.current.value;
        let action = apdateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
    <div className={s.postBlock}>
        <h3>My posts</h3>
              <div>
                <div>
                   <textarea onChange={onChangPost} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
              </div>
        <div className={s.posts}>

            { postsElements }

        </div>
    </div>
)
}


export default MyPost;