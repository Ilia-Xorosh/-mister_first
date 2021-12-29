import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import DialogReduxForm from "./DialogForm/DialogForm";



const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} avatar={d.avatar} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message  message={m.message} id={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className= {s.dialogs}>
            <div className={s.dialogsItems}>

             {dialogsElements}

            </div>
         <div className={s.messages}>
             <div className={s.messagesLeft}>
                 <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'/>

               {messagesElements}

                 <DialogReduxForm onSubmit={addNewMessage}/>

             </div>

         </div>
        </div>
    )
}

export default Dialogs;

/* <DialogForm value={newMessageBody} onChange={onNewMessageChang} onClick={onSendMessageClick}/>
<div>
                     <div>
                         <textarea
    value={newMessageBody}
    onChange={onNewMessageChang}
    placeholder='Enter your message'/>
                     </div>
                     <div>
                         <button onClick={onSendMessageClick}>Add Massage</button>
                     </div>
                 </div> */