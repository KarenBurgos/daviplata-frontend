import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../assets/radioInput.css";
import SessionCard from "../../components/sessionCard";
import optionsIcon from "../../assets/icons/options.png";

const SplittBillSession = () => {
  const navigation = useNavigate();

  const [options, setOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("equitativo");

  function goBack() {
    navigation(-1);
  }

  const handleOptionView = () => {
    setOptions(!options);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="text-white text-2xl flex flex-col justify-center items-center">
      <h1 className="mt-4 mb-1 text-xl font-bold">DIVIDIR GASTOS SALA</h1>
      <p className="mb-4 text-xs">codigo: #########</p>
      <span className="relative flex items-center">
        <h2 className="text-lg">Personas en la sala</h2>
        <button className="cursor-pointer" onClick={handleOptionView}>
          <img src={optionsIcon} className="pl-2" />
        </button>
      </span>

      {options && (
        <div className="bg-black mt-4 w-full">
          <form
            onSubmit={handleSubmit}
            className="control-group flex flex-col justify-center items-center"
          >
            <div className="">
              <label className="control control-radio">
                equitativo
                <input
                  type="radio"
                  name="radio"
                  value="equitativo"
                  checked={selectedOption === "equitativo"}
                  onChange={handleOptionChange}
                />
                <div className="control_indicator"></div>
              </label>
              <label className="control control-radio">
                Porcentaje
                <input
                  type="radio"
                  name="radio"
                  value="porcentaje"
                  checked={selectedOption === "porcentaje"}
                  onChange={handleOptionChange}
                />
                <div className="control_indicator"></div>
              </label>
              <label className="control control-radio">
                Personalizado
                <input
                  type="radio"
                  name="radio"
                  value="personalizado"
                  checked={selectedOption === "personalizado"}
                  onChange={handleOptionChange}
                />
                <div className="control_indicator"></div>
              </label>
            </div>
          </form>
          <div className="flex text-lg justify-center items-center">
            <h2>Total:</h2>
            <input className="bg-transparent px-2 py-1 w-[30%]" value="$0.00" />
          </div>
        </div>
      )}
      <div className="flex flex-col justify-around overflow-hidden overflow-y-auto w-[75%] h-[50vh] mt-4">
        <div className="pt-10">
          <SessionCard selection={selectedOption} />
        </div>
        <div className="pt-10">
          <SessionCard selection={selectedOption} />
        </div>
        <div className="pt-10">
          <SessionCard selection={selectedOption} />
        </div>
      </div>
      <div className="flex items-center pt-5"> 
        <button
          className="py-2 px-7 mr-2 bg-primary rounded-md w-[80%] text-xl"
        >
          Pagar
        </button>
        <button
          className="py-2 px-7 ml-2 bg-secondary rounded-md w-[80%] text-xl"
          onClick={goBack}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default SplittBillSession;
