import React from "react";
import ReserveCard from "../components/reserveCard";

function ReserveMoney() {

    return (
        <div className="flex justify-center items-start mt-8 mx-4">
          {/* Aquí puedes ajustar el ancho de la tarjeta y el margen según tus necesidades */}
          <ReserveCard 
            onConfirm={() => {}} // Ajusta estas funciones según tus necesidades
            onCancel={() => {}}  // Ajusta estas funciones según tus necesidades
          />
        </div>
      );
}

export default ReserveMoney;
