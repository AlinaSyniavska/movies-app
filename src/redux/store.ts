import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer, genreReducer, userInfoReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    userInfoReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch,
}

export {
    setupStore
}