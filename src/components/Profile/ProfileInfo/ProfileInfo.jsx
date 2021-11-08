import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    let lookingForAJob = props.profile.lookingForAJob;
    lookingForAJob = true ? 'Yes': 'No';

    let facebook = <a href={props.profile.contacts.facebook}>Facebook</a>

    return (
        <div>
            <div>
                <img src='https://up.netbian.net/pic/69/f9/da/69f9da52945dad3a59a233c825421399.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>
                    <strong>{props.profile.fullName}</strong>
                </div>
                <div>
                    <span className={s.profileStatus}>"{props.profile.aboutMe}"</span>
                </div>
                <div>
                    <strong>{facebook}</strong>
                </div>
            <div>
                    <span>Looking for a job: {lookingForAJob}</span>
            </div>
                <div>
                    <span className={s.profileStatus}>"{props.profile.lookingForAJobDescription}"</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;