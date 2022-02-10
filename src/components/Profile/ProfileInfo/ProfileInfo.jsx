import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if(!profile) {
        return <Preloader/>
    }
    let lookingForAJob = profile.lookingForAJob;
    lookingForAJob = true ? 'Yes': 'No';

    let facebook = <a href={profile.contacts.facebook}>Facebook</a>

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>
                    <strong>{profile.fullName}</strong>
                </div>
                <div>
                    <span className={s.profileStatus}>"{profile.aboutMe}"</span>
                </div>
                <div>
                    <strong>{facebook}</strong>
                </div>
            <div>
                    <span>Looking for a job: {lookingForAJob}</span>
            </div>
                <div>
                    <span className={s.profileStatus}>"{profile.lookingForAJobDescription}"</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;