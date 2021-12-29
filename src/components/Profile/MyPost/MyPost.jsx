import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={"textarea"} type={"textarea"} />
        </div>
        <div>
            <button>Post</button>
        </div>
    </form>)
}

const MyPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddPostForm)

const MyPost = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/> );

    let AddNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
    <div className={s.postBlock}>
        <h3>My posts</h3>
              <div>
                <MyPostReduxForm onSubmit={AddNewPost} />
              </div>
        <div className={s.posts}>

            { postsElements }

        </div>
    </div>
)
}


export default MyPost;

/*<div>
                   <textarea onChange={onChangPost} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>*/