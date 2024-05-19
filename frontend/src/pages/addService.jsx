// AddService.js
import React from 'react';
import Card from '../components/addBudgetCard';

const AddService = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <div className="container mx-auto p-4">
        <h2 className="text-white text-center text-2xl font-semibold mb-6">AGREGAR PRESUPUESTO</h2>
          <Card />
      </div>
    </div>
  );
};

export default AddService;
