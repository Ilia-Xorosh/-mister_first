import React, {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {appStateType} from "../Redux/Redux-store";

let mapStateToPropsForRedirect = (state: appStateType) => ({
    isAuth: state.auth.isAuth
})

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
}
export function withAuthRedirect<WCP>(WrappedComponent: ComponentType<WCP>) {
debugger
    const RedirectComponent: FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapStatePropsType, MapDispatchPropsType, WCP, appStateType>(mapStateToPropsForRedirect,
        {}) (RedirectComponent)
    return ConnectedAuthRedirectComponent
}