import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import budgetData from "../../data/budgetData"; // Importar dummy data

function SplittBillSessionPay() {
    const navigate = useNavigate();
    const location = useLocation();
    const { sessionCode } = location.state; // Obtener el código de la sesión desde el estado de la navegación

    const [session, setSession] = useState(null);
    const [totalBill, setTotalBill] = useState(0);
    const [sessionUsers, setSessionUsers] = useState([]);
    const [userBalances, setUserBalances] = useState({});

    useEffect(() => {
        // Cargar datos desde localStorage o usar dummy data
        let data = localStorage.getItem('budgetData');
        data = data ? JSON.parse(data) : budgetData;

        // Buscar la sesión usando el código de sesión
        const sessionData = data.sessions.find(session => session.code === sessionCode);

        if (sessionData) {
          setSession(sessionData);
      
          // Obtener el monto total a pagar de la relación entre la sesión y los usuarios
          const userDui = "12345678-9";
      
          // Buscar el ID del usuario basado en el DUI
          const user = data.users.find(u => u.DUI === userDui);
          if (user) {
              // Buscar la relación de usuario-sesión
              const userSession = data.userSessions.find(us => us.id_user === user.id_user && us.id_session === sessionData.id_session);
              const total = userSession ? userSession.total : 0;
              setTotalBill(total || 0);
      
              // Obtener los usuarios en la sesión
              const userSessions = data.userSessions.filter(us => us.id_session === sessionData.id_session);
              const users = userSessions.map(us => data.users.find(user => user.id_user === us.id_user));
              setSessionUsers(users);
      
              // Obtener los saldos de los usuarios
              const balances = {};
              users.forEach(user => {
                  const account = data.users.find(u => u.id_user === user.id_user).Account;
                  balances[user.id_user] = account ? account.money : 0;
              });
              setUserBalances(balances);
          } else {
              console.error("Usuario no encontrado.");
          }
      } else {
          console.error("Sesión no encontrada.");
      }
      
    }, [sessionCode]);

    const handleConfirm = () => {
        // Lógica de confirmación...
        console.log("Aceptar");

        // Actualizar el balance de dinero de los usuarios
        const updatedBalances = { ...userBalances };
        sessionUsers.forEach(user => {
            updatedBalances[user.id_user] -= totalBill / sessionUsers.length;
        });
        setUserBalances(updatedBalances);

        // Actualizar los datos en localStorage (solo para demostración, en una aplicación real usaría una API)
        const data = localStorage.getItem('budgetData');
        const parsedData = data ? JSON.parse(data) : budgetData;
        sessionUsers.forEach(user => {
            const userIndex = parsedData.users.findIndex(u => u.id_user === user.id_user);
            if (userIndex !== -1) {
                parsedData.users[userIndex].Account.money = updatedBalances[user.id_user];
            }
        });
        localStorage.setItem('budgetData', JSON.stringify(parsedData));

        // Redireccionar a "/usuario/splitbill"
        navigate("/usuario/splitbill");
    };

    const handleCancel = () => {
        // Lógica de cancelación...
        console.log("Cancelar");
        // Redireccionar a "/usuario/splitbill"
        navigate("/usuario/splitbill");
    };

    return (
        <div className="text-white flex flex-col justify-center items-center">
            <h1 className="mt-4 mb-1 text-3xl font-bold">DIVIDIR GASTOS</h1>
            {session ? (
                <>
                    <p className="text-lg">Código: {session.code}</p>

                    <div className="py-5 flex flex-col items-center">
                        <h2 className="text-xl text-center">Monto a pagar:</h2>
                        <input
                            type="number"
                            name="bill"
                            id="bill"
                            placeholder="$00.00"
                            className="bg-transparent border border-white rounded-md p-1 w-[30vw]"
                            value="50.00"
                            readOnly
                        />
                    </div>

                    <h1>¿Estás seguro de realizar este pago?</h1>

                    <div className="text-white py-10">
                        <p>Gastos totales: 50</p>
                        <p>Saldo actual: ${userBalances[sessionUsers[0].id_user].toFixed(2)}</p> {/* Se muestra el saldo del primer usuario */}
                        <p>Saldo restante: 2450.00</p> {/* Se asume que el saldo restante será el mismo para todos los usuarios */}
                    </div>
                    <button 
                        className="mt-2 bg-primary text-white py-2 w-[80vw] rounded"
                        onClick={handleConfirm}
                    >
                        Aceptar
                    </button>

                    <button 
                        className="mt-2 bg-secondary text-white py-2 w-[80vw] rounded"
                        onClick={handleCancel}
                    >
                        Cancelar
                    </button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SplittBillSessionPay;
