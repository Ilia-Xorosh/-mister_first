import s from './Post.module.css';

const Post = (props) => {
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