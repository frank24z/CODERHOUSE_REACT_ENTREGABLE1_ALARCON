import React, { useState } from 'react';
import FormularioEdad from './FormularioEdad';
import ListaPersonas from './ListaPersonas';


const App = () => {
  const [personas, setPersonas] = useState([]);

  const handleCalcularEdad = (persona) => {
   
    const edadCalculada = {
      ...persona,
      anos: 2024 - persona.ano,
    };

    setPersonas([...personas, edadCalculada]);
  };

  return (
    <div>
      <h1>Calculadora de Edad</h1>
      <FormularioEdad onSubmit={handleCalcularEdad} />
      <ListaPersonas personas={personas} />
    </div>
  );
};

export default App;
