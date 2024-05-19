import userIcon from "../assets/icons/User.svg";
import { useState } from "react";
function SessionCard({ selection }) {
  return (
    <div className="border border-white rounded-md flex text-lg">
      <div className="p-5">
        <embed src={userIcon} type="" />
      </div>
      <div className="py-5 pr-5">
        <span>
          <h2 className="font-bold">Usuario</h2>
          <p>123456789101112</p>
        </span>
        <span>
          <h2 className="font-bold">monto a pagar:</h2>
          <input
            type="number"
            name="bill"
            id="bill"
            placeholder="$0.00"
            className="bg-transparent border border-white rounded-md md:w-[10vw] p-1 w-[20vw]"
          />
          {selection == "porcentaje" && (
            <input
              type="number"
              name="percentaje"
              id="percentaje"
              placeholder="50"
              className="bg-transparent border border-white rounded-md p-1 w-[20vw] md:w-[10vw] ml-2"
            />
          )}
        </span>
      </div>
    </div>
  );
}

export default SessionCard;
