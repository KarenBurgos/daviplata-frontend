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

    useEffect(() => {
        // Cargar datos desde localStorage o usar dummy data
        let data = localStorage.getItem('budgetData');
        data = data ? JSON.parse(data) : budgetData;

        // Buscar la sesión usando el código de sesión
        const sessionData = data.sessions.find(session => session.code === sessionCode);

        if (sessionData) {
            setSession(sessionData);
            setTotalBill(sessionData.totalBill || 0); // Usar el totalBill de la sesión si existe

            // Buscar los usuarios en la sesión
            const userSessions = data.userSessions.filter(us => us.id_session === sessionData.id_session);
            const users = userSessions.map(us => data.users.find(user => user.id_user === us.id_user));
            setSessionUsers(users);
        } else {
            console.error("Sesión no encontrada.");
        }
    }, [sessionCode]);

    const handleConfirm = () => {
        // Lógica de confirmación...
        console.log("Aceptar");
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
                            placeholder="$0.00"
                            className="bg-transparent border border-white rounded-md p-1 w-[30vw]"
                            value={totalBill}
                            readOnly
                        />
                    </div>

                    <h1>¿Estás seguro de realizar este pago?</h1>

                    <div className="text-white py-10">
                        <p>Gastos totales: ${totalBill.toFixed(2)}</p>
                        <p>Saldo actual: $0.00</p>
                        <p>Saldo restante: $0.00</p>
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
