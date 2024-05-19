import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import daviLogo from "../assets/icons/Davivienda_Logo.png"; // Asegúrate de importar tu logo
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Dummy data
  const users = [
    { dui: '12345678-9', password: 'password1' },
    { dui: '98765432-1', password: 'password2' },
  ];

  const [dui, setDui] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.dui === dui && u.password === password);
    if (user) {
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
      toast.error('Usuario o contraseña incorrectos', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-8  rounded-lg shadow-lg">
        <div className="flex justify-center">
          <img src={daviLogo} alt="DAVIplata Logo" className="w-24 h-24 mx-auto"/>
        </div>
        <h1 className="text-2xl font-bold text-center text-white">Daviplata</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="dui" className="block text-sm font-medium text-white">
              Ingrese su número de DUI
            </label>
            <input
              type="text"
              id="dui"
              name="dui"
              value={dui}
              onChange={(e) => setDui(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Ingrese su contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
              Recordar mi usuario
            </label>
          </div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={()=>{navigate("/usuario")}}
          >
            Continuar
          </button>
        </form>
        <div className="flex justify-between pt-4 text-sm text-gray-300">
          <a href="/forgot-password" className="hover:underline">
            Olvidé mi contraseña
          </a>
          <a href="/register" className="hover:underline">
            Nuevo registro
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
