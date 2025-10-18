import React from "react";
import { Link } from "react-router-dom";
import CardNota from "../components/CardNota";
import { User } from "lucide-react";
import { ScanLine } from "lucide-react";

import "./HomeScreen.css";

function HomeScreen() {
  const testeNotas = [
    {
      id: 1,
      titulo: "Rodrigues Supermercado",
      valor: 150.0,
      data: "20/09/2025",
      hora: "14:30",
    },
    {
      id: 2,
      titulo: "Felix Supermercado",
      valor: 2000.0,
      data: "18/09/2025",
      hora: "10:00",
    },
    {
      id: 3,
      titulo: "Farmácia Saúde",
      valor: 58,
      data: "15/09/2025",
      hora: "16:45",
    },
  ];

  const totalMes = testeNotas.reduce((acc, nota) => acc + nota.valor, 0);

  return (
    <>
      <header className="HeaderHome">
        <span className="HeaderTitle"> Track Price</span>
        <button className="UserButton">
          <User/> {/* TODO: foto e nome inseridos pelo user */}
        </button>
      </header>

      <main className="MainHome">
        <div className="ResumoMes">
          <div className="MesInfo">
            <h3>{"< Outubro de 2025 >"}</h3> {/* TODO: Deverá ser dinâmico */}
            <h4>Total Mensal: R$ {totalMes}</h4> {/* TODO: Deverá ser dinâmico */}
          </div>

          <div>
            <button className="BotaoQR"> <ScanLine size={36} />Ler QR Code</button>
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
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeScreen;
