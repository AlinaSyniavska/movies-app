import {FC} from "react";

import style from './UserInfo.module.css';
import {ColorTheme} from "../ColorTheme/ColorTheme";

const UserInfo: FC = () => {
    return (
        <div>
            <div className={style.userProfile}>
                <ColorTheme/>
                <div className={`${style.userPhoto} ${style.lightBg}`}>
                    <div className={style.userName}>A</div>
                </div>
            </div>
        </div>
    )

};

export {UserInfo};