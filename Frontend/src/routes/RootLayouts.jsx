import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayouts() {
    return(
        <>
            <MainHeader/>
            <Outlet/>
        </>
    )
}

export default RootLayouts;