import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {

    return (
     <div>
         < ProfileInfo profile={props.profile}
                       status={props.status}
                       updateStatus={props.updateStatus}
                       isOwner={props.isOwner} savePhoto={props.savePhoto}/>

         <MyPostContainer store={props.store}/>
    </div>
    )
}

export default Profile;