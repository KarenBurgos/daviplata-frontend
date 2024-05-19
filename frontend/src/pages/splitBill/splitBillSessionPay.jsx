import { useNavigate } from "react-router-dom";

function SplittBillSessionPay() {
    const navigate = useNavigate();

    const handleConfirm = () => {
        // Lógica de confirmación...
        console.log("Aceptar");
        // Redireccionar a "/"
        navigate("/usuario/splitbill");
    };

    const handleCancel = () => {
        // Lógica de cancelación...
        console.log("usuario/Cancelar");
        // Redireccionar a "/"
        navigate("/usuario/splitbill");
    };

  return (
    <div className="text-white flex flex-col justify-center items-center">
      <h1 className="mt-4 mb-1 text-3xl font-bold">DIVIDIR GASTOS</h1>
      <p className="text-lg">codigo: #########</p>

      <div className="py-5 flex flex-col items-center">
        <h2 className="text-xl text-center">monto a pagar:</h2>
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="$0.00"
          className="bg-transparent border border-white rounded-md p-1 w-[30vw]"
        />
      </div>

      <h1>¿Estas seguro de realizar este pago?</h1>

      <div className="text-white py-10">
        <p>Gastos totales: $0.00</p>
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
    </div>
  );
}

export default SplittBillSessionPay;
