import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ReserveCard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const {id, nombre, precio, fecha, isLocked } = location.state || {};

    // Datos quemados para demostración
    const nombreGasto = "Compras en el supermercado";
    const montoBloquear = precio || 0; // $100.00
    const saldoActual = 500; // $500.00
    const saldoRestante = saldoActual - montoBloquear;

    console.log(id);

    const handleConfirm = () => {
        // Lógica de confirmación...
        console.log("Aceptar");
        console.log(isLocked);
        
        const budgetList = JSON.parse(localStorage.getItem('budgets'));

        const updatedBudgets = budgetList.map(budget => {
            if (budget.id_service === id) {
              return { ...budget, isBlock: false }; // Actualiza la edad de Bob a 31
            }
            return budget;
          });

          // Subir la nueva lista al localStorage
        localStorage.setItem('budgets', JSON.stringify(updatedBudgets));

        // Redireccionar a "/"
        navigate('/usuario');
    };

    const handleCancel = () => {
        // Lógica de cancelación...
        console.log("Cancelar");
        // Redireccionar a "/"
        navigate("/usuario");
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

