import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../Redux/AuthReducer";
import {appStateType} from "../../Redux/Redux-store";

export type mapStatePropsType = {
    login: string | null
    isAuth: boolean
}
export type mapDispatchPropsType = {
    logOut: () => void
}

class  HeaderContainer extends React.Component<mapStatePropsType & mapDispatchPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: appStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect<mapStatePropsType, mapDispatchPropsType, {}, appStateType>(mapStateToProps, {logOut}) (HeaderContainer);