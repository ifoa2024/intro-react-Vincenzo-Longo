import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Bandiera() {
  const colori = ["bianco", "verde"];

  const [ colore1, colore2, colore3 = 'giallo' ] = colori;

  return (
    <div>
      <h1>Colori</h1>
      <span>Primo {colore1}/ </span>
      <span>Secondo {colore2}/ </span>
      <span>Terzo {colore3}</span>
    </div>
  );
}

export default Bandiera;
