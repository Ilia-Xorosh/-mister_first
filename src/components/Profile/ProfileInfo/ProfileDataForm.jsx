import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormControls/FormControl";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return ( <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
        </div>
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", Input, [])}
        </div>
        <div>
            <b className={s.profileStatus}>About me</b>: {createField("About me", "aboutMe", Input, [])}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
        </div>
        <div>
            <b className={s.profileStatus}>My professional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", Textarea, [])}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => { return <div key={key} className={s.contact}>
            <b>{key}: {createField(key, "contacts." + key, Input, [])}</b></div>})}
        </div>
    </form>)
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm);

export default ProfileDataReduxForm;