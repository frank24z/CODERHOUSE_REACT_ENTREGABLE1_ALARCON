import React from 'react';

const ListaPersonas = ({ personas }) => {
  return (
    <ul>
      {personas.map((persona, index) => (
        <li key={index}>
          {persona.nombre} - {persona.anos}
        </li>
      ))}
    </ul>
  );
};

export default ListaPersonas;
