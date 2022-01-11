import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {

    return (
     <div>
         < ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
         <MyPostContainer store={props.store}/>
    </div>
    )
}

export default Profile;