import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import s from "./HW5.module.css";
import { PATH } from "./Routes";

function Header() {

const [showMenu, setShowMenu] = useState<boolean>(false);
const toggle = () => {
  setShowMenu(!showMenu);
  console.log(showMenu)
}

    return (
        <div className={`${s.headerWrapper} ${showMenu && s.show}`}>
          <div className={s.menuItems}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active} className={s.menuLink}> PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.active} className={s.menuLink}> Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active} className={s.menuLink}> Junior Plus</NavLink>
          </div>
          <div className={`${s.offMenuButton} ${showMenu && s.onMenuButton}`} onClick={toggle}></div>
        </div>
    );
}

export default Header;
