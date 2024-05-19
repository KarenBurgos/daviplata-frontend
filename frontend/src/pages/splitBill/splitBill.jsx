import { useNavigate } from "react-router-dom";

function SplittBill(){
    const navigate = useNavigate();

    function onHandlerClick(menu) {
      navigate(`/${menu}`);
    }

    return(
        <div>
            <h1 className="text-white text-2xl flex flex-col items-center">
                <h1 className="my-5 text-3xl font-bold">DIVIDIR GASTOS</h1>
                <div className="flex flex-col justify-center items-center w-full ">
                    <button 
                        className="bg-transparent border border-white rounded-md my-4 w-[60%] py-2 text-lg"
                        onClick={() => {
                            onHandlerClick("splitbill/session/code");
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