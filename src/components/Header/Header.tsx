import {FC} from "react";
import {NavLink} from "react-router-dom";

import style from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";

const Header: FC = () => {
    return (
        <div>
            <div className={`${style.headerContainer} ${style.lightBg}`}>
                <NavLink to="movies">Movies</NavLink>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};