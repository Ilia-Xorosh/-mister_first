import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/> );
    let messagesElements = props.state.messages.map( m => <Message  message={m.message} /> );

    return (
        <div className= {s.dialogs}>
            <div className={s.dialogsItems}>

             {dialogsElements}

         </div>
         <div className={s.messages}>
             <div className={s.messagesLeft}>
                 <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'/>

               {messagesElements}
             </div>
             <div className={s.messagesRight}>
                 <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'/>

             {messagesElements}
             </div>

         </div>
        </div>
    )
}

export default Dialogs;