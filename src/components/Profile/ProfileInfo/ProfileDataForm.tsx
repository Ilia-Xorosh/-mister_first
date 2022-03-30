import React, {FC} from "react";
import s from "./ProfileInfo.module.css";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormControls/FormControl";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({profile, handleSubmit, error}) => {
    return ( <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
        </div>
        <div>
            <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", Input, [])}
        </div>
        <div>
            <b className={s.profileStatus}>About me</b>: {createField<ProfileTypeKeys>("About me", "aboutMe", Input, [])}
        </div>
        <div>
            <b>Looking for a job</b>: {createField<ProfileTypeKeys>("", "lookingForAJob", Input, [], {type: "checkbox"})}
        </div>
        <div>
            <b className={s.profileStatus}>My professional skills</b>:
            {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", Textarea, [])}
        </div>
        <div>
            {/* todo: create some solution for embedded objects */}
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => { return <div key={key} className={s.contact}>
            <b>{key}: {createField(key, "contacts." + key, Input, [])}</b></div>})}
        </div>
    </form>)
}

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({
    form: 'edit-profile'
})(ProfileDataForm);

export default ProfileDataReduxForm;