import {FC} from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage} from "./pages";

const App : FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};