import { useNavigate } from "react-router-dom";
import { useState } from "react";
import budgetData from "../../data/budgetData"; // Asegúrate de importar tu dummy data

function generateRandomCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

function getNextId(array, idField = "id_session") {
  return array.length ? Math.max(...array.map(item => item[idField])) + 1 : 1;
}

function loadBudgetData() {
  const data = localStorage.getItem('budgetData');
  return data ? JSON.parse(data) : budgetData;
}

function saveBudgetData(data) {
  localStorage.setItem('budgetData', JSON.stringify(data));
}

function SplitBillCode() {
  const navigate = useNavigate();
  const [code] = useState(generateRandomCode());
  const [billAmount, setBillAmount] = useState("");
  
  let budgetData = loadBudgetData();

  const userDUI = "12345678-9"; // DUI quemado para pruebas
  const user = budgetData.users.find(user => user.DUI === userDUI);

  if (!user) {
    console.error("Usuario no encontrado");
    return null;
  }

  const userId = user.id_user;

  function onHandlerClick(menu) {
    navigate(`/${menu}`);
  }

  function handleAccept() {
    const newSessionId = getNextId(budgetData.sessions, "id_session");
    const newUserSessionId = getNextId(budgetData.userSessions, "id_userxsession");

    // Crear la nueva sesión
    const newSession = {
      id_session: newSessionId,
      timestamp: new Date().toISOString(),
      code: code,
      total: parseFloat(billAmount) || null,
      status: true,
      id_user_host: userId
    };

    // Agregar la nueva sesión a budgetData
    budgetData.sessions.push(newSession);

    // Añadir el usuario a la nueva sesión
    const newUserSession = {
      id_userxsession: newUserSessionId,
      id_user: userId,
      id_session: newSessionId
    };

    // Agregar el usuario a la sesión en budgetData
    budgetData.userSessions.push(newUserSession);

    // Guardar budgetData en localStorage
    saveBudgetData(budgetData);

    console.log("Nueva sesión creada:", newSession);
    console.log("Usuario añadido a la sesión:", newUserSession);

    // Navegar a la página de sesión y pasar el monto de la cuenta
    onHandlerClick("usuario/splitbill/session");
  }

  return (
    <div className="text-white flex flex-col justify-center items-center">
      <span className="p-5">
        <h1 className="text-3xl font-bold">DIVIDIR GASTOS</h1>
        <h2 className="text-lg text-center">Creando sala</h2>
      </span>

      <div className="rounded-md py-10 w-[80%] flex flex-col justify-center items-center my-5">
        <h1 className="text-2xl">Codigo: {code}</h1>
        <h2 className="text-xl pt-5 pb-2">Ingresar monto a pagar:</h2>
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="$0.00"
          className="bg-transparent border border-white rounded-md p-1"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>

      <button
        className="my-3 mt-10 bg-primary rounded-md w-[80%] py-2 text-xl"
        onClick={handleAccept}
      >
        Aceptar
      </button>
      <button
        className="my-3 bg-secondary rounded-md w-[80%] py-2 text-xl"
        onClick={() => {
          onHandlerClick("usuario/splitbill");
        }}
      >
        Cancelar
      </button>
    </div>
  );
}

export default SplitBillCode;
