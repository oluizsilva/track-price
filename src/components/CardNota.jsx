import React from "react";
import "./CardNota.css";

function CardNota({ id, titulo, valor, data, hora, onClick }) {
  return (
    <div className="CardNota" onClick={onClick}>
      <div className="NotaTopo">
        <h3>{titulo}</h3>
        <p>
          <span className="NotaID">ID:</span> {id}
        </p>
      </div>
      <div className="NotaRodape">
        <p>
          {data}-{hora}
        </p>
        <p>
          <span className="NotaValor">Valor: R$</span>
          {valor}
        </p>
      </div>
    </div>
  );
}

export default CardNota;
