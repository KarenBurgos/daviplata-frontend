import { useNavigate } from "react-router-dom";

function SplitBillCode() {
  const navigate = useNavigate();

  function onHandlerClick(menu) {
    navigate(`/${menu}`);
  }
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <span className="p-5">
        <h1 className="text-3xl font-bold">DIVIDIR GASTOS</h1>
        <h2 className="text-lg text-center">Creando sala</h2>
      </span>

      <div className="rounded-md py-10 w-[80%] flex flex-col justify-center items-center my-5">
        <h1 className="text-2xl">Codigo: #######</h1>
        <h2 className="text-xl pt-5 pb-2">Ingresar monto a pagar:</h2>
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="$0.00"
          className="bg-transparent border border-white rounded-md p-1"
        />
      </div>

      <button
        className="my-3 mt-10 bg-primary rounded-md w-[80%] py-2 text-xl"
        onClick={() => {
          onHandlerClick("splitbill/session");
        }}
      >
        Aceptar
      </button>
      <button
        className="my-3 bg-secondary rounded-md w-[80%] py-2 text-xl"
        onClick={() => {
          onHandlerClick("splitbill");
        }}
      >
        Cancelar
      </button>
    </div>
  );
}

export default SplitBillCode;
