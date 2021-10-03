import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const SideBar = () => {
  return (  <div className={s.friends}>
        <NavLink to='/friends' activeClassName={s.activelink} className={s.friendsName}>Friends</NavLink>
        <div className={s.avatar}>
            <div>
                <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'/>
                <b>Ilia</b>
            </div>
            <div>
                <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'/>
                <b>Stepa</b>
            </div>
            <div>
                <img src='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'/>
                <b>Den</b>
            </div>
        </div>
    </div>
    )
}

export default SideBar;