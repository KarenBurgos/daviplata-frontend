import { useNavigate } from "react-router-dom";

function SplittBill(){
    const navigate = useNavigate();

    function onHandlerClick(menu) {
      navigate(`/${menu}`);
    }

    return(
        <div>
            <h1 className="text-white text-2xl flex flex-col justify-center items-center">
                <h1 className="my-4 text-xl font-bold">DIVIDIR GASTOS</h1>
                <div className="flex flex-col justify-center items-center w-full mt-4">
                    <button 
                        className="bg-transparent border border-white rounded-md my-4 w-[60%] py-2 text-lg"
                        onClick={() => {
                            onHandlerClick("splitbill/session");
                        }}
                    >
                        Crear sala
                    </button>
                    <button className="bg-transparent border border-white rounded-md my-4 w-[60%] py-2 text-lg">Ingresar a una sala</button>
                </div>
            </h1>
        </div>
    )
}

export default SplittBill;