import React from "react";
import { User } from "lucide-react";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <>
      <header className="HeaderHome">
        <span>Track Price</span>
        <button className="UserButton">
          <User /> {/* TODO: foto e nome inseridos pelo user */}
        </button>
      </header>

      <main className="MainHome">
        <div className="ResumoMes">
          <div className="MesInfo">
            <h2>{"<Outubro de 2025>"}</h2> {/* TODO: Deverá ser dinâmico */}
            <h3>Preço: R$ 300,00</h3> {/* TODO: Deverá ser dinâmico */}
          </div>

          <div className="BotaoQR">
            <button>Gerar QR Code</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeScreen;
