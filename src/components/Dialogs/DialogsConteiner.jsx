import React from "react";
import {apdateNewMessageBodyCreator, sendMessageCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";

const DialogsConteiner = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

     let onNewMessageChang = (body) => {
        props.store.dispatch(apdateNewMessageBodyCreator(body));
     }


    return (
        <Dialogs
            apdateNewMessageBody={onNewMessageChang}
            sendMessage={onSendMessageClick}
            dialogsPage={state}/>
    )
}

export default DialogsConteiner;