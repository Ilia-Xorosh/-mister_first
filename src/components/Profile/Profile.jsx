import React from "react";
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPost/Post/Post";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {

    return (
     <div>
            < ProfileInfo />
            <MyPostContainer store={props.store}/>
    </div>
    )
}

export default Profile;