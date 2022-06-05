import {FC} from "react";

import style from './UserInfo.module.css';

const UserInfo: FC = () => {
    return (
        <div>
            <div className={style.userProfile}>
                <div className={`${style.userPhoto} ${style.lightBg}`}>
                <div className={style.userName}>A</div>
            </div>
        </div>
</div>
)

};

export {UserInfo};