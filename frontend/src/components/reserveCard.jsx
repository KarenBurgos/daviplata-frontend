import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReserveCard = () => {
    const navigate = useNavigate();

    // Datos quemados para demostración
    const nombreGasto = "Compras en el supermercado";
    const montoBloquear = 100; // $100.00
    const saldoActual = 500; // $500.00
    const saldoRestante = saldoActual - montoBloquear;

    const handleConfirm = () => {
        // Lógica de confirmación...
        console.log("Aceptar");
        // Redireccionar a "/"
        navigate("/");
    };

    const handleCancel = () => {
        // Lógica de cancelación...
        console.log("Cancelar");
        // Redireccionar a "/"
        navigate("/");
    };

    return (
        <div className="bg-black text-white border border-white rounded-lg p-4 flex flex-col items-center justify-between w-80">
            <div className="text-lg  mb-4">
                Se bloqueará el monto de ${montoBloquear.toFixed(2)} de tu cuenta para cubrir el gasto de <span className="font-bold">{nombreGasto}</span>
            </div>
            <div className="text-base mb-4 text-right"> 
                Monto a bloquear: ${montoBloquear ? montoBloquear.toFixed(2) : "N/A"}
            </div>
            <div className="text-base mb-4 text-right"> 
                Saldo actual: ${saldoActual ? saldoActual.toFixed(2) : "N/A"}
            </div>

            <hr className="border border-white w-full mb-4" />
            <div className="text-base mb-4">
                Saldo restante: ${saldoRestante ? saldoRestante.toFixed(2) : "N/A"}
            </div>
            <div className="text-lg mb-4">
                ¿Confirma el bloqueo de este monto en su cuenta?
            </div>
            <div className="flex flex-row items-center">
                <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded mr-4" onClick={handleConfirm}>Aceptar</button>
                <button className="mt-2 bg-gray-500 text-white py-2 px-4 rounded mr-4" onClick={handleCancel}>Cancelar</button>
            </div>
            {/* Espacio adicional al final */}
            <div style={{ marginBottom: '20px' }}></div>
        </div>
    );
};

export default ReserveCard;

