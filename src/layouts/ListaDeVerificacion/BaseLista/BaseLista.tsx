import { BaseSyntheticEvent } from "react";
import meses from "../ListadoMeses";
import "./BaseLista.css";

const selecMes = (e: BaseSyntheticEvent) => {
  const mesClase = "." + e.target.id;
  const mesSelector = document.querySelectorAll(mesClase);
  console.log(mesSelector);
  mesSelector.forEach((node) => (node.innerHTML = "V"));
};

const BaseLista = () => {
  return (
    <div className="BaseLista">
      <div className="ce6 num">Núm.</div>
      <div className="ce6 item">ITEM</div>
      {meses.map((mes) => {
        return (
          <div onClick={selecMes} className="ce6_2 mes" key={mes} id={mes}>
            {mes}
          </div>
        );
      })}
    </div>
  );
};

export default BaseLista;
