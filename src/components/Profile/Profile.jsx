import a from './Profile.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
    return (
        <div className={a.content}>
        <div>
        <img src='https://up.netbian.net/pic/69/f9/da/69f9da52945dad3a59a233c825421399.jpg'/>
    </div>
    <div>
        ava + description
    </div>
    <MyPost />
    </div>
    )
}

export default Profile;