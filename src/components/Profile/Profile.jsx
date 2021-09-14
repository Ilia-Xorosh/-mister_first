import React from "react";
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPost/Post/Post";

const Profile = (props) => {

    return (
     <div>
            < ProfileInfo />
            <MyPost posts={props.state.posts} addPost={props.addPost}/>
    </div>
    )
}

export default Profile;