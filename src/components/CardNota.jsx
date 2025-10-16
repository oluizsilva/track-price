import React from "react";
import "./CardNota.css";

function CardNota({ id, titulo, valor, data, hora, onClick }) {
  return (
    <div className="CardNota" onClick={onClick}>
      <h3>{titulo}</h3>
      <p>ID {id}</p>
      <p>{data}-{hora}</p>
      <p>Valor: R${valor}</p>
    </div>
  );
}

export default CardNota;
