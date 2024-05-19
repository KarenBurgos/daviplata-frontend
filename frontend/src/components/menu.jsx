import { useNavigate } from "react-router-dom";
import payIcon from "../assets/icons/Pagar.svg";
import splitBillIcon from "../assets/icons/dividir.svg";
import budgetIcon from "../assets/icons/presupuesto.svg";
import sacarIcon from "../assets/icons/sacar.svg";
import rechargeIcon from "../assets/icons/recarga.svg";

function Menu() {
    const navigate = useNavigate();

    function onHandlerClick(menu) {
        navigate(`/${menu}`);
    }

    return (
        <div className="bg-primary h-[10vh] fixed bottom-0 left-0 right-0 flex justify-around items-center text-white"> {/* Añadir clases para hacer el menú fijo */}
            <div className="flex flex-col justify-center items-center">
                <embed src={payIcon} type="" />
                <p>Pagar</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => onHandlerClick("")}>
                <embed src={budgetIcon} type="" />
                <p>Presupuesto</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <embed src={sacarIcon} type="" />
                <p>Sacar</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => onHandlerClick("splitbill")}>
                <embed src={splitBillIcon} type="" />
                <p>Dividir</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <embed src={rechargeIcon} type="" />
                <p>Recarga</p>
            </div>
        </div>
    );
}

export default Menu;
