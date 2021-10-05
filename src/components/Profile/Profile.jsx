import React from "react";
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPost/Post/Post";
import MyPostConteiner from "./MyPost/MyPostConteiner";

const Profile = (props) => {

    return (
     <div>
            < ProfileInfo />
            <MyPostConteiner store={props.store}/>
    </div>
    )
}

export default Profile;