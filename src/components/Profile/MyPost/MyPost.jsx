import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../Redux/Profile-reduser";

const MyPost = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} /> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onChangPost = () => {
        let text = newPostElement.current.value;
        props.apdateNewPostText(text);

    }

    return (
    <div className={s.postBlock}>
        <h3>My posts</h3>
              <div>
                <div>
                   <textarea onChange={onChangPost} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
              </div>
        <div className={s.posts}>

            { postsElements }

        </div>
    </div>
)
}


export default MyPost;