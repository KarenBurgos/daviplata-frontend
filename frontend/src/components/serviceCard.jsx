import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import foodIco from "../assets/icons/comida_ico.svg";
import unlockIco from "../assets/icons/unlock.svg";
import lockIco from "../assets/icons/lock.svg";

const Card = ({id, nombre, precio, fecha, locked }) => {
    const navigate = useNavigate();
    const [isLocked, setIsLocked] = useState(); // Estado para manejar el icono

    function onHandlerClick(menu) {
      navigate(`/${menu}`);
    }

    function toggleLock() {
        // Redirige a la página "reserveMoney" cuando se hace clic en el botón de bloqueo/desbloqueo
        setIsLocked(!locked);
        navigate('budget/reserve-service' , { state: {id, nombre, precio, fecha, isLocked: !isLocked} });
    }
    
    return (
        <div className="bg-black text-white border border-white rounded-lg p-4 flex items-center justify-between w-72">
            <div className="flex items-center">
                <div className="w-10 h-10 mr-4">
                    <embed src={foodIco} />
                </div>
                <div>
                    <div className="text-lg font-bold">{nombre}</div>
                    <div className="text-base">${precio}</div>
                    <div className="text-sm">Para: {fecha}</div>
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


