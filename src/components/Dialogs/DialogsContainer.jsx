import React from "react";
import {apdateNewMessageBodyCreator, sendMessageCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        apdateNewMessageBody: (body) => {
            dispatch(apdateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect) (Dialogs);