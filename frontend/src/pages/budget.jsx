import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import ServiceCard from "../components/serviceCard";

const initialBudgetData  = [
    {
      id: 1,
      nombre: "Mensualidad",
      precio: 180.00,
      fecha: "24/05",
      locked: true,
    },
    {
      id: 2,
      nombre: "Matricula",
      precio: 100.00,
      fecha: "01/08",
      locked: true,
    },
    {
      id: 3,
      nombre: "Gym",
      precio: 8.75,
      fecha: "1/06",
      locked: true,
    },
    {
      id: 4,
      nombre: "Servicios",
      precio: 12.00,
      fecha: "14/06",
      locked: true,
    },
    {
      id: 5,
      nombre: "Vivienda",
      precio: 60.00,
      fecha: "24/05",
      locked: true,
    },
];

function Budget() {
    const navigate = useNavigate();
    const location = useLocation();
    const [budgetData, setBudgetData] = useState(initialBudgetData);

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

    return (
        <div className="flex flex-col items-center min-h-screen bg-black overflow-y-auto px-4 pb-40"> {/* Ajuste del overflow-y */}
            <h1 className="text-white text-2xl mt-6">Presupuesto</h1>
            
            <div className="w-full flex flex-col items-center mt-4 space-y-4 px-4 pb-24"> {/* Ajuste del espaciado */}
                {budgetData.map((item) => (
                    <ServiceCard
                        key={item.id} // Usar un key único para cada elemento en el array
                        nombre={item.nombre}
                        precio={item.precio}
                        fecha={item.fecha}
                        locked={item.locked}
                    />
                ))}
            </div>
            
            <div className="fixed bottom-[10vh] left-0 right-0 bg-black border-t border-white p-4 text-center"> {/* Ajuste del margen inferior */}
                <div className="text-white">
                    <p>Gastos totales: $0.00</p>
                    <p>Saldo actual: $0.00</p>
                    <p>Saldo restante: $0.00</p>
                </div>
                <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded">
                    Agregar
                </button>
            </div>
        </div>
    );
}

export default Budget;
