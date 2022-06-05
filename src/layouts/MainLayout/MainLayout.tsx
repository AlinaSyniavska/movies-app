import {FC} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import {Pagination} from "../../components/Pagination/Pagination";

const MainLayout: FC = () => {
    return (
        <div>
            <div>
                <Header/>
                <Pagination/>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};