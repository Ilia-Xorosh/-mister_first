import React, { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: FC<PropsType> = (props) => {
    return (
     <div>
         < ProfileInfo profile={props.profile}
                       status={props.status}
                       updateStatus={props.updateStatus}
                       isOwner={props.isOwner} savePhoto={props.savePhoto}
                       saveProfile={props.saveProfile}/>

         <MyPostContainer />
    </div>
    )
}

export default Profile;