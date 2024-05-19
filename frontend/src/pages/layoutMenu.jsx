import { Outlet } from "react-router-dom";
import Menu from "../components/menu";

function LayoutMenu() {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-[10vh] bg-primary flex justify-center items-center">
                <h1 className="text-comfortaa text-3xl text-white">DAVIPLATA</h1>
            </div>
            <div className="flex-1 overflow-auto"> {/* Permitir que el contenido tenga scroll */}
                <Outlet />
            </div>
            <Menu /> {/* El menú estará siempre visible */}
        </div>
    );
}

export default LayoutMenu;
