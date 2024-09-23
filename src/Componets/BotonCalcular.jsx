import React from 'react';

const BotonCalcular = ({ texto, onClick }) => {
  return (
    <button onClick={onClick} className="boton-calcular">
      {texto}
    </button>
  );
};

export default BotonCalcular;
