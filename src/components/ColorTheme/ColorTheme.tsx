import {ChangeEvent, FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hook";
import {userInfoActions} from "../../redux";

const ColorTheme: FC = () => {

    const {colorTheme} = useAppSelector(state => state.userInfoReducer);
    const dispatch = useAppDispatch();

    const [theme, setTheme] = useState<string>(colorTheme);

    const changeColorTheme = (event: ChangeEvent<HTMLInputElement>) => {
        setTheme(event.target.value);
    }

    useEffect(() => {
        dispatch(userInfoActions.changeUserColorTheme({colorTheme: theme}));
    }, [theme])

    return (
        <div>
            <div>
                <label>Light
                    <input type="radio" value="light" name="themeColor" onChange={changeColorTheme}/>
                </label>
            </div>
            <div>
                <label>Dark
                    <input type="radio" value="dark" name="themeColor" onChange={changeColorTheme}/>
                </label>
            </div>
        </div>
    );
};

export {ColorTheme};