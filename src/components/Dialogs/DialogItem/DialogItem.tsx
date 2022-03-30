import React, {FC} from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom"

type PropsType = {
    id: number
    name: string | null
    avatar: string | undefined
}

const DialogItem: FC<PropsType> =(props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img src ={props.avatar}/>
        <NavLink to={path} activeClassName={s.activelink}>{props.name}</NavLink>
    </div>
}

export default DialogItem;