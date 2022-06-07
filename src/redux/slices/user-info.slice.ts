import {createSlice} from "@reduxjs/toolkit";

interface IState {
    colorTheme: string;
}

const initialState: IState = {
    colorTheme: 'light',
};


const userInfoSlice = createSlice({
    name: 'userInfoSlice',
    initialState,
    reducers: {
        changeUserColorTheme: (state, action) => {
            state.colorTheme = action.payload.colorTheme;
        }
    },
})

const {reducer: userInfoReducer, actions: {changeUserColorTheme}} = userInfoSlice;

const userInfoActions = {
    changeUserColorTheme,
}

export {
    userInfoReducer,
    userInfoActions
}