import {FC, useEffect} from "react";
import {Outlet} from "react-router-dom";

import style from './MainLayout.module.css';
import '../../App.css'
import {GenresListForm, Header} from "../../components";
import {useAppSelector} from "../../hook";
import {userInfoService} from "../../services";

const MainLayout: FC = () => {

    const {colorTheme} = useAppSelector(state => state.userInfoReducer);

    useEffect(()=> {
        userInfoService.changeColorTheme(`${style.wrap}`,  colorTheme);
    }, [colorTheme])

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