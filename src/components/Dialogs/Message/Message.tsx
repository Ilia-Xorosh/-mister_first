import React, {FC} from "react";
import s from './../Dialogs.module.css';
import {MessagesType} from "../../../types/types";


const Message: FC<MessagesType> = (props) => {
    return  <div className={s.message}>{props.message}</div>
}



export default Message;