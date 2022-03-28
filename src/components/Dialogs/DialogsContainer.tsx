import React from "react";
import {actions} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {appStateType} from "../../Redux/Redux-store";


let mapStateToProps = (state: appStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(connect(mapStateToProps, {...actions}), withAuthRedirect) (Dialogs);