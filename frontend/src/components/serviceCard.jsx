import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import foodIco from "../assets/icons/comida_ico.svg";
import unlockIco from "../assets/icons/unlock.svg";
import lockIco from "../assets/icons/lock.svg";

const Card = () => {
    const navigate = useNavigate();
    const [isLocked, setIsLocked] = useState(false); // Estado para manejar el icono

    function onHandlerClick(menu) {
      navigate(`/${menu}`);
    }

    function toggleLock() {
        // Redirige a la página "reserveMoney" cuando se hace clic en el botón de bloqueo/desbloqueo
        navigate("budget/reserve-service");
        setIsLocked(!isLocked);
    }
    
    return (
        <div className="bg-black text-white border border-white rounded-lg p-4 flex items-center justify-between w-72">
            <div className="flex items-center">
                <div className="w-10 h-10 mr-4">
                    <embed src={foodIco} />
                </div>
                <div>
                    <div className="text-lg font-bold">Nombre</div>
                    <div className="text-base">$0.00</div>
                    <div className="text-sm">Para: 24/05</div>
                </div>
            </div>
            <button 
                className="w-10 h-10 flex items-center justify-center bg-transparent border-none p-0 m-0" 
                onClick={toggleLock}
                style={{ cursor: 'pointer' }}
            >
                <img src={isLocked ? lockIco : unlockIco} alt="Lock/Unlock Icon" className="w-full h-full"/>
            </button>
        </div>
    );
}

export default Card;


