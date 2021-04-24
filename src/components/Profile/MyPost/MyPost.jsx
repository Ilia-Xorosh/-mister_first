import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
            <div>
            My posts
              <div>
                New post
              </div>
        <div className={s.posts}>
            <Post message='Hi, have are you?' likeCount='5'/>
            <Post message="It's my first post!" likeCount='45'/>
        </div>
            </div>
)
}


export default MyPost;