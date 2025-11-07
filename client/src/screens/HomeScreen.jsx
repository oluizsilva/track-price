import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { testeNotas } from "../data/testeNotas";
import CardNota from "../components/CardNota";
import { ScanLine, User } from "lucide-react";

import { Html5QrcodeScanner } from "html5-qrcode";
import { useState } from "react";
import "./HomeScreen.css";

function HomeScreen() {
  const navigate = useNavigate();
  const totalMes = testeNotas.reduce((acc, nota) => acc + nota.valor, 0);

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  });

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

          <div id="reader">

            {scanResult
              ? <div>Success: <a href={"http://"+scanResult}>{scanResult}</a></div>
              : <div>Erro ao ler QR Code</div>
            }


            <button className="BotaoQR">
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
