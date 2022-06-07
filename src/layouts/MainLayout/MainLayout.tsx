import {FC} from "react";
import {Outlet} from "react-router-dom";

import style from './MainLayout.module.css';
import {GenresListForm, Header} from "../../components";

const MainLayout: FC = () => {
    return (
        <div className={`${style.wrap} ${style.light}`}>
            <div className={style.mainContainer}>
                <Header/>
                <div className={style.movieContent}>
                    <div className={`${style.genresList} ${style.lightBg}`}><GenresListForm/></div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export {MainLayout};