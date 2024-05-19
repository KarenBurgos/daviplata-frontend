import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from '../components/categories';
import budgetData from '../data/budgetData';

const Card = () => {
    const navigate = useNavigate();
    
    const [amount, setAmount] = useState('0.00'); // Cambiado a string para permitir números decimales
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [categorySelect, setCategorySelect] = useState("seleccionar categoria");
    const [automatic, setAutomatic] = useState(false);
    const [categoryId, setCategoryId] = useState();

    const handleAmountChange = (e) => {
        const inputVal = e.target.value;
        // Verificar si el valor ingresado es un número o está vacío
        if (/^\d*\.?\d*$/.test(inputVal) || inputVal === '') {
            setAmount(inputVal);
        }
    };

    

    const incrementAmount = () => {
        setAmount((prevAmount) => (parseFloat(prevAmount) + 1).toFixed(2)); // Aumentar y formatear a 2 decimales
    };

    const decrementAmount = () => {
        setAmount((prevAmount) => (parseFloat(prevAmount) > 0 ? (parseFloat(prevAmount) - 1).toFixed(2) : '0.00')); // Disminuir y formatear a 2 decimales
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleConfirm = () => {
        const newService = {
            id_service: Date.now(), // Generar un ID único para el servicio
            name,
            amount: parseFloat(amount),
            date,
            isBlock: false, // Se asume que el servicio no está bloqueado por defecto
            id_category: 1,
            id_budget: 1, // Obtener el ID de presupuesto del usuario actual
        };

        // Agregar el nuevo servicio al usuario actual
        const updatedBudgetData = { ...budgetData };
        const currentUserIndex = updatedBudgetData.users.findIndex(user => user.id_user === 1); // Por ejemplo, asumiendo que estamos agregando el servicio al usuario con id_user 1
        updatedBudgetData.users[currentUserIndex].Services.push(newService);

        toast.success("Servicio agregado con éxito", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => navigate("/usuario") // Redireccionar después de cerrar el toast
        });
    };

    const handleCancel = () => {
        // Redireccionar a la página /usuario
        navigate("/usuario");
    };

    return (
        <div className="flex flex-col justify-around h-[65vh] bg-black text-white rounded-xl shadow-md overflow-hidden p-6 border border-gray-800">
            <div className="flex justify-between items-center mb-4">
                <button
                    className="text-5xl font-semibold"
                    onClick={decrementAmount}
                >
                    -
                </button>
                <div className='flex'>
                    <span className="inset-y-0 left-0 flex items-center text-5xl">$</span>
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        className="text-center rounded bg-background w-[40vw] text-5xl"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>
                <button
                    className="text-5xl font-semibold"
                    onClick={incrementAmount}
                >
                    +
                </button>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nombre:</label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-white bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Categoría:</label>
                <Dropdown categoryId={categoryId} setCategoryId={setCategoryId} categorySelect={categorySelect} setCategorySelect={setCategorySelect} />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Fecha:</label>
                <div className="flex items-center">
                    <input
                        type="date"
                        placeholder="DD/MM/AAAA"
                        className="block w-full px-4 py-2 text-white bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={date}
                        onChange={handleDateChange}
                    />
                </div>
            </div>
            {(categorySelect === 'Mensualidad' || categorySelect === 'Matricula' || categorySelect === 'gym') &&
                <div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-indigo-600"
                                onChange={() => {
                                    setAutomatic(!automatic)
                                }}
                            />
                            <span className="ml-2">Pagar automáticamente</span>
                        </label>
                    </div>
                    {automatic &&
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Número de cuenta:</label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 text-white bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    }
                </div>
            }
            <div className="flex justify-between">
                <button
                    onClick={handleConfirm}
                    className="w-full mr-2 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Agregar
                </button>
                <button
                    onClick={handleCancel}
                    className="w-full ml-2 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Cancelar
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Card;
