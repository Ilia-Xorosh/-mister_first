import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from "../../Redux/ProfileReducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {appStateType} from "../../Redux/Redux-store";
import {ProfileType} from "../../types/types";

type OwnPropsType = {
}
type MapStatePropsType = {
    profile: ProfileType
    status: string | null
    authorizedUserId: number
}
type MapDispatchPropsType = {
    getStatus: (userId: number) => void
    updateStatus: () => void
    getUserProfile: (userId: number) => void
    savePhoto: () => void
    saveProfile: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType>  {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();

    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
        this.refreshProfile();
        }
    }

    render() {

    return (
     <Profile {...this.props}
              isOwner={!this.props.match.params.userId}
              profile={this.props.profile}
              status={this.props.status}
              updateStatus={this.props.updateStatus}
              savePhoto={this.props.savePhoto}
              saveProfile={this.props.saveProfile}/>
    )
}
}

let mapStateToProps = (state: appStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getStatus, updateStatus, getUserProfile, savePhoto, saveProfile}),
    withRouter, /*withAuthRedirect*/)(ProfileContainer);