import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {appStateType} from "../../Redux/Redux-store";
import {ProfileType} from "../../types/types";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
    getStatus: (userId: number) => void
    updateStatus: (status: string | null) => void
    getUserProfile: (userId: number) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType>{

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                // todo: may be replace push with Redirect???
                this.props.history.push("/login")
            }
        }
        if(!userId){
            console.error("ID should exists in URI params or in state ('authorizedUserId')")
        } else {
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
        this.refreshProfile()
        }
    }

    render() {

    return (
     <Profile {...this.props}
              isOwner={!this.props.match.params.userId}
              profile ={this.props.profile}
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

export default compose<ComponentType>(
    connect(mapStateToProps, {getStatus, updateStatus, getUserProfile, savePhoto, saveProfile}),
    withRouter, withAuthRedirect)(ProfileContainer)