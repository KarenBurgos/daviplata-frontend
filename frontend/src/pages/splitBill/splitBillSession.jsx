import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../assets/radioInput.css";
import SessionCard from "../../components/sessionCard";
import optionsIcon from "../../assets/icons/options.png";
import budgetData from "../../data/budgetData"; // Asegúrate de importar tu dummy data

const loadBudgetData = () => {
  const data = localStorage.getItem('budgetData');
  return data ? JSON.parse(data) : budgetData;
};

const SplittBillSession = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("equitativo");
  const [sessionCode, setSessionCode] = useState("");
  const [sessionTotal, setSessionTotal] = useState(0);
  const [sessionUsers, setSessionUsers] = useState([]);

  useEffect(() => {
    // Cargar los datos desde localStorage
    const budgetData = loadBudgetData();

    // Encontrar la última sesión creada (suponiendo que es la más reciente)
    const lastSession = budgetData.sessions[budgetData.sessions.length - 1];
    setSessionCode(lastSession.code);
    setSessionTotal(lastSession.total);

    // Encontrar usuarios que pertenecen a la última sesión creada
    const userSessions = budgetData.userSessions.filter(
      (us) => us.id_session === lastSession.id_session
    );
    const users = userSessions.map((us) =>
      budgetData.users.find((user) => user.id_user === us.id_user)
    );
    setSessionUsers(users);
  }, []);

  function onHandlerNavigate(menu) {
    navigate(`/${menu}`);
  }

  function goBack() {
    navigate(-1);
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
      <p className="mb-4 text-md">codigo: {sessionCode}</p>
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
            <input className="bg-transparent px-2 py-1 w-[30%]" value={`$${sessionTotal.toFixed(2)}`} readOnly />
          </div>
        </div>
      )}
      <div className="flex flex-col justify-around overflow-hidden overflow-y-auto w-[75%] h-[50vh] mt-4">
        {sessionUsers.map((user) => (
          <div className="pt-10" key={user.id_user}>
            <SessionCard selection={selectedOption} user={user} />
          </div>
        ))}
      </div>
      <div className="flex items-center pt-5"> 
        <button
          className="py-2 px-7 mr-2 bg-primary rounded-md w-[80%] text-xl"
          onClick={() => {onHandlerNavigate("usuario/splitbill")}}
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
