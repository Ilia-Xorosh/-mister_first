import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
return <header className={s.header}>
    <img src='https://freepikpsd.com/wp-content/uploads/2019/10/design-logo-png-7-Transparent-Images.png'/>
    <div className={s.loginBlock}>
        {props.isAuth ? props.login
        : <NavLink to={'/login'} activeClassName={s.activelink}>Login</NavLink> }
    </div>
</header>
}

export default Header;