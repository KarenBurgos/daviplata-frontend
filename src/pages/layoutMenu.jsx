import { Outlet, useLocation } from "react-router-dom";
import Menu from "../components/menu";

function LayoutMenu() {
    return(
        <div className="h-screen">
            <div className="h-[10vh] bg-primary flex justify-center items-center">
                <h1 className="text-comfortaa text-3xl text-white">DAVIPLATA</h1>
            </div>
            <div className="h-[80vh]">
                <Outlet />
            </div>
            <Menu/>
        </div>
    )
}
    
export default LayoutMenu;