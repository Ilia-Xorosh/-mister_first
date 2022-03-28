import React, { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType} from "../../types/types";
import {appStateType} from "../../Redux/Redux-store";

type PropsType = {
    profile: ProfileType
    status: string | null
    updateStatus: () => void
    savePhoto: () => void
    saveProfile: () => void
    isOwner: boolean
    store: appStateType
}

const Profile: FC<PropsType> = (props) => {

    return (
     <div>
         < ProfileInfo profile={props.profile}
                       status={props.status}
                       updateStatus={props.updateStatus}
                       isOwner={props.isOwner} savePhoto={props.savePhoto}
                       saveProfile={props.saveProfile}/>

         <MyPostContainer store={props.store}/>
    </div>
    )
}

export default Profile;