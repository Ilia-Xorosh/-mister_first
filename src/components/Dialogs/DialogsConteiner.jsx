import React from "react";
import {apdateNewMessageBodyCreator, sendMessageCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsConteiner = () => {

    /*let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChang = (body) => {
        props.store.dispatch(apdateNewMessageBodyCreator(body));
    }*/


    return (
        <StoreContext.Consumer>
            {
            (store) =>
            {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChang = (body) => {
                    store.dispatch(apdateNewMessageBodyCreator(body));
                }
            return <Dialogs
                apdateNewMessageBody={onNewMessageChang}
                sendMessage={onSendMessageClick}
                dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsConteiner;