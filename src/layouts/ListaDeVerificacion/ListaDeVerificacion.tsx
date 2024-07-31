import Cabecera from "../Cabecera/Cabecera";
import BaseLista from "./BaseLista/BaseLista";
import DatosAscensor from "./DatosAscensor/DatosAscensor";
import Listado from "./Listado";
import "./ListaDeVerificacion.css";
import meses from "./ListadoMeses";
import { BaseSyntheticEvent } from "react";

function ValidarListado(e: BaseSyntheticEvent) {
  const valor = e.target.innerText;

  if (valor === "-") e.target.innerText = "V";
  if (valor === "O") e.target.innerText = "-";
  if (valor === "V") e.target.innerText = "O";
}

const ListaDeVerificacion = () => {
  return (
    <div id="chkls" className="FormatoBase">
      <Cabecera titulo="LISTA DE VERIFICACIÓN" />

      <DatosAscensor />

      <BaseLista />

      {Listado.map((Dato, Index) => {
        return (
          <div className="BaseLista" key={Index}>
            <div className="ce5 num">{Index + 1}</div>
            <div className="ce10 item" key={Dato}>
              {Dato}
            </div>
            {meses.map((mes, indice) => {
              return (
                <div className="ce14 mes chkList" key={indice}>
                  <div
                    className={mes}
                    onClick={ValidarListado}
                    id={mes + "_" + Index + "_" + 1}
                  >
                    -
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <p>&nbsp;</p>
      <div className="ce6 def" id="leerDatos">
        DEFINICIÓN
      </div>
      <div className="ce7 def" id="escribirDatos">
        V = VERIFICADO
      </div>
      <div className="ce7 def">O = OBSERVACIÓN</div>
    </div>
  );
};

export default ListaDeVerificacion;
