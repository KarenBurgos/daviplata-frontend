import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from '../components/categories';
import datepicker from '../assets/icons/datepicker.svg';

const Card = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0.00);
    const [categorySelect, setCategorySelect] = useState("seleccionar categoria")
    const [automatic, setAutomatic] = useState(false)
    const incrementAmount = () => {
        setAmount(prevAmount => prevAmount + 1);
    };

    const decrementAmount = () => {
        setAmount(prevAmount => (prevAmount > 0 ? prevAmount - 1 : 0));
    };

    const handleConfirm = () => {
        //navigate("/usuario");
        // Mostrar un toast de confirmación
        toast.success("Servicio agregado con éxito", {
            position: "top-right",
            autoClose: 1500, // Cerrar automáticamente después de 3 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => navigate("/usuario") // Redireccionar después de cerrar el toast
        });
    };

    const handleCancel = () => {
        // Redireccionar a la página /budget
        navigate("/usuario");
    };

    return (
        <div className="flex flex-col justify-around h-[60vh] max-w-md mx-auto bg-black text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 border border-gray-800">
            <div className="flex justify-between items-center mb-4">
                <button
                    className="text-3xl font-semibold"
                    onClick={decrementAmount}
                >
                    -
                </button>
                <span className="text-4xl font-semibold">${amount.toFixed(2)}</span>
                <button
                    className="text-3xl font-semibold"
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
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Categoría:</label>
                <Dropdown categorySelect={categorySelect} setCategorySelect={setCategorySelect} />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Fecha:</label>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="DD/MM/AAAA"
                        className="block w-full px-4 py-2 text-white bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>
            {(categorySelect == 'Mensualidad' || categorySelect == 'Matricula' || categorySelect == 'gym') &&
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
                    { automatic &&
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