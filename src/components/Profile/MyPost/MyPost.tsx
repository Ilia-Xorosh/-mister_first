import React, {FC} from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControl";
import {PostType} from "../../../types/types";


const maxLength10 = maxLengthCreator(10);

type PropsType = {}

const AddPostForm: FC<InjectedFormProps<LoginFormValuesType, PropsType> & PropsType> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={Textarea} validate={[required, maxLength10]} placeholder={'Post message'}/>
        </div>
        <div>
            <button>Post</button>
        </div>
    </form>)
}

const MyPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddPostForm)

type MyPostPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const MyPost: FC<MyPostPropsType> = React.memo(props => {

    let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likeCount={p.likeCount} id={p.id}/> );

    let AddNewPost = (values: any) => {
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
})


export default MyPost;
