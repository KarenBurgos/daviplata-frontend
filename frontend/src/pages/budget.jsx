import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import ServiceCard from "../components/serviceCard";
import initialBudgetData from '../data/budgetData';

function Budget() {
    const navigate = useNavigate();
    const location = useLocation();

    // Extraer los datos del primer usuario
    const user = initialBudgetData.users[0]; 
    const [budgetData, setBudgetData] = useState(user.Services);
    const [accountData, setAccountData] = useState(user.Account);
    

    const { nombre, precio, fecha, isLocked } = location.state || {};

    useEffect(() => {
        if (nombre && precio && fecha !== undefined) {
            setBudgetData((prevBudgetData) => {
                return prevBudgetData.map(item => 
                    item.nombre === nombre && item.fecha === fecha
                        ? { ...item, precio, locked: isLocked }
                        : item
                );
            });
        }
    }, [nombre, precio, fecha, isLocked]);

    const handleConfirm = () => {
        // Lógica de confirmación...
        console.log("Aceptar");
        // Redireccionar a "/"
        navigate("budget/add-service");
    };

    const totalExpenses = budgetData.reduce((total, item) => total + item.amount, 0);
    const remainingBalance = accountData.money - totalExpenses;

    return (
        <div className="flex flex-col items-center min-h-screen bg-black overflow-y-auto px-4 pb-40"> {/* Ajuste del overflow-y */}
            <h1 className="text-white text-2xl mt-6 font-bold">PRESUPUESTO</h1>
            
            <div className="w-full flex flex-col items-center mt-4 space-y-4 px-4 pb-24"> {/* Ajuste del espaciado */}
                {budgetData.map((item) => (
                    <ServiceCard
                        key={item.id_service}
                        nombre={item.name}
                        precio={item.amount}
                        fecha={item.date}
                        locked={item.isBlock}
                    />
                ))}
            </div>
            
            <div className="fixed bottom-[10vh] left-0 right-0 bg-black p-4 text-center"> {/* Ajuste del margen inferior */}
                <div className="text-white">
                    <p>Gastos totales: ${totalExpenses.toFixed(2)}</p>
                    <p>Saldo actual: ${accountData.money.toFixed(2)}</p>
                    <p>Saldo restante: ${remainingBalance.toFixed(2)}</p>
                </div>
                <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded" onClick={handleConfirm}>
                    Agregar
                </button>
            </div>
        </div>
    );
}

export default Budget;
