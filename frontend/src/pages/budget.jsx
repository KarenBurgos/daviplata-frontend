import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/serviceCard";

function Budget() {
    const navigate = useNavigate();

    const handleConfirm = () => {
        // Lógica de confirmación...
        console.log("Aceptar");
        // Redireccionar a "/"
        navigate("budget/add-service");
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-black pb-24"> {/* Ajuste del padding-bottom */}
            <h1 className="text-white text-2xl mt-6">Presupuesto</h1>
            
            <div className="w-full flex flex-col items-center mt-4 space-y-4 px-4"> {/* Ajuste del espaciado */}
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                {/* Agrega más ServiceCards según sea necesario */}
            </div>
            
            <div className="fixed bottom-[10vh] left-0 right-0 bg-black border-t border-white p-4 text-center"> {/* Ajuste del margen inferior */}
                <div className="text-white">
                    <p>Gastos totales: $0.00</p>
                    <p>Saldo actual: $0.00</p>
                    <p>Saldo restante: $0.00</p>
                </div>
                <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded" onClick={handleConfirm}>
                    Agregar
                </button>
            </div>
        </div>
    );
}

export default Budget;
