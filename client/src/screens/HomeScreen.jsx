import React from "react";
import { useNavigate } from "react-router-dom";
import { testeNotas } from "../data/testeNotas";
import CardNota from "../components/CardNota";
import { User } from "lucide-react";
import { ScanLine } from "lucide-react";

import "./HomeScreen.css";

function HomeScreen() {
  
  const navigate = useNavigate();
  const totalMes = testeNotas.reduce((acc, nota) => acc + nota.valor, 0);

  return (
    <>
      <header className="HeaderHome">
        <span className="HeaderTitle"> Track Price</span>
        <button className="UserButton">
          <User /> {/* TODO: foto e nome inseridos pelo user */}
        </button>
      </header>

      <main className="MainHome">
        <div className="ResumoMes">
          <div className="MesInfo">
            <h3>
              <button className="NavegarMes">{"<"}</button>
              {"Outubro de 2025"}
              <button className="NavegarMes">{">"}</button>
            </h3>{" "}
            {/* TODO: Deverá ser dinâmico */}
            <h4>Total Mensal: R$ {totalMes}</h4>
            {/* TODO: Deverá ser dinâmico */}
          </div>

          <div>
            <button className="BotaoQR">
              {" "}
              <ScanLine size={36} />
              Ler QR Code
            </button>
          </div>
        </div>

        <div className="ContainerNotas">
          <h2 className="ContainerTitulo">Suas Notas</h2>
          <div className="NotasList">
            {testeNotas.map((nota) => (
              <CardNota
                key={nota.id}
                id={nota.id}
                titulo={nota.titulo}
                valor={nota.valor}
                data={nota.data}
                hora={nota.hora}
                onClick={() => navigate(`/nota/${nota.id}`)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeScreen;
