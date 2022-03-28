import React, { FC } from "react";
import s from './Post.module.css';
import {PostType} from "../../../../types/types";

const Post: FC<PostType> = (props) => {
    return (
            <div className={s.item}>
                <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'/>
                { props.message }
            <div>
                <span> Like </span>
                { props.likeCount }
            </div>
            </div>
)
}


export default Post;