import React, {FC} from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {createField, GetStringKeys, Textarea} from "../../common/FormControls/FormControl";
import {PostType} from "../../../types/types";
import {MapDispatchPropsType, MapStatePropsType} from "./MyPostContainer";


const maxLength500 = maxLengthCreator(500);

type PropsType = {}
type FormValuesType = {
    newPostText: string
}
type FormValuesTypeKeys = GetStringKeys<FormValuesType>

const AddPostForm: FC<InjectedFormProps<FormValuesType, PropsType> & PropsType> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            {createField<FormValuesTypeKeys>("Post message", "newPostText", Textarea, [required, maxLength500])}
        </div>
        <div>
            <button>Post</button>
        </div>
    </form>)
}

const MyPostReduxForm = reduxForm<FormValuesType, PropsType>({
    form: 'ProfileAddNewPostForm'
})(AddPostForm)


const MyPost: FC<MapStatePropsType & MapDispatchPropsType> = React.memo(props => {

    let postsElements = [...props.posts].reverse().map( p => <Post key={p.id} message={p.message} likeCount={p.likeCount} id={p.id}/> );

    let AddNewPost = (values: FormValuesType) => {
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
