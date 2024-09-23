import React, { useState } from 'react';
import BotonCalcular from './BotonCalcular';

const FormularioEdad = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, dia, mes, ano });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label>Día:</label>
      <input type="number" value={dia} onChange={(e) => setDia(e.target.value)} />

      <label>Mes:</label>
      <input type="number" value={mes} onChange={(e) => setMes(e.target.value)} />

      <label>Año:</label>
      <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} />

      <BotonCalcular texto="Calcular Edad" onClick={handleSubmit} />
    </form>
  );
};

export default FormularioEdad;
