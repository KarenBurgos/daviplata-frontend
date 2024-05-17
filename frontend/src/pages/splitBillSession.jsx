import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/radioInput.css";
import SessionCard from "../components/sessionCard";

function SplittBillSession() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("equitativo");

  function onHandlerClick(menu) {
    navigate(`/${menu}`);
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    console.log('Selected option:', selectedOption); // Puedes hacer algo con el valor seleccionado
  };
  return (
    <div>
      <h1 className="text-white text-2xl flex flex-col justify-center items-center">
        <h1 className="mt-4 mb-1 text-xl font-bold">DIVIDIR GASTOS SALA</h1>
        <p className="mb-4 text-xs">codigo: #########</p>
        <h2 className="text-lg">Personas en la sala</h2>

        <form onSubmit={handleSubmit} className="control-group">
          <label class="control control-radio">
            equitativo
            <input
              type="radio"
              name="radio"
              value="equitativo"
              checked={selectedOption === "equitativo"}
              onChange={handleOptionChange}
            />
            <div class="control_indicator"></div>
          </label>
          <label class="control control-radio">
            Porcentaje
            <input
              type="radio"
              name="radio"
              value="porcentaje"
              checked={selectedOption === "porcentaje"}
              onChange={handleOptionChange}
            />
            <div class="control_indicator"></div>
          </label>
          <label class="control control-radio">
            Personalizado
            <input
              type="radio"
              name="radio"
              value="personalizado"
              checked={selectedOption === "personalizado"}
              onChange={handleOptionChange}
            />
            <div class="control_indicator"></div>
          </label>
        </form>
            <SessionCard/>
      </h1>
    </div>
  );
}

export default SplittBillSession;
