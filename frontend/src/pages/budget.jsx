import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ServiceCard from "../components/serviceCard";
import initialBudgetData from '../data/budgetData';

function Budget() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [budgetData, setBudgetData] = useState([]);
    const [accountData, setAccountData] = useState({});

    // Leer el valor del localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Actualizar budgetData y accountData cuando user cambia
    useEffect(() => {
        if (user) {
            const budgetUser = initialBudgetData.users.find(u => u.DUI === user);
            if (budgetUser) {
                setBudgetData(budgetUser.Services);
                setAccountData(budgetUser.Account);
            }
        }
    }, [user]);

    // Guardar budgetData en localStorage cuando se actualiza
    useEffect(() => {
        if (budgetData.length > 0) {
            if (!localStorage.getItem('budgets')) {
                console.log("Entre y guardé datos en el localStorage");
                localStorage.setItem('budgets', JSON.stringify(budgetData));
            } else {
                console.log("Ya existe un usuario en el local storage");
            }
        }
    }, [budgetData]);

    const handleConfirm = () => {
        // Lógica de confirmación...
        console.log("Aceptar");
        // Redireccionar a "/budget/add-service"
        navigate("budget/add-service");
    };

    const totalExpenses = budgetData.reduce((total, item) => total + item.amount, 0);
    const remainingBalance = accountData.money - totalExpenses;

    const budgets = JSON.parse(localStorage.getItem('budgets')) || [];

    return (
        <div className="flex flex-col items-center min-h-screen bg-black overflow-y-auto px-4 pb-40"> {/* Ajuste del overflow-y */}
            <h1 className="text-white text-2xl mt-6 font-bold">PRESUPUESTO</h1>
            <div className="w-full flex flex-col items-center mt-4 space-y-4 px-4 pb-24">
                {budgetData.map((item) => (
                    <ServiceCard
                        key={item.id_service}
                        id={item.id_service}
                        nombre={item.name}
                        precio={item.amount}
                        fecha={item.date}
                        locked={item.isBlock}
                    />
                ))}
            </div> 
            
            <div className="fixed bottom-[10vh] left-0 right-0 bg-black p-4 text-center">
                <div className="text-white">
                    <p>Saldo reservado: ${totalExpenses}</p>
                    <p>Saldo actual: ${accountData.money}</p>
                    <p>Saldo restante: ${remainingBalance}</p>
                </div>
                <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded" onClick={handleConfirm}>
                    Agregar
                </button>
            </div>
        </div>
    );
}

export default Budget;
