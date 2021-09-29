import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {apdateNewMessageBodyCreator, sendMassageCreator} from "../../Redux/State";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/> );
    let messagesElements = state.messages.map( m => <Message  message={m.message} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMassageCreator());
    }

     let onNewMessageChang = (e) => {
       let body = e.target.value;
        props.store.dispatch(apdateNewMessageBodyCreator(body));
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
                 <div>
                     <div>
                         <textarea
                             value={newMessageBody}
                             onChange={onNewMessageChang}
                             placeholder='Enter your message'></textarea>
                     </div>
                     <div>
                         <button onClick={onSendMessageClick}>Add Massage</button>
                     </div>
                 </div>
             </div>

         </div>
        </div>
    )
}

export default Dialogs;