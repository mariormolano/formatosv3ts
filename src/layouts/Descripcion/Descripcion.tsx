import "./Descripcion.css";

import { useState } from "react";
import { useStore } from "exome/react";
import { globalStore } from "@core/stores/GlobalStore";

const Descripcion = ({
  titulo,
  contenido,
}: {
  titulo: string;
  contenido: string;
}) => {
  const { Mes } = useStore(globalStore);

  const contenidoDescripcion = contenido.includes("MANTENIMIENTO")
    ? contenido + Mes.toUpperCase()
    : contenido;

  const [ descripcionCuadro, setDescripcion ] =
    useState<string>(contenidoDescripcion);

  // const descripcionTexto = () => {
  //   const texto = prompt("Ingrese la descripcion", descripcionCuadro);
  //   texto ? setDescripcion(texto) : null;
  // };

  return (
    <div>
      <div className="borde3">
        <p> { titulo } </p>
      </div>
      <div className="borde2">
        <div className="texto_descripcion">
          <p
            // onClick={descripcionTexto}
            id="concepto_factura"
            className="concepto"
          >
            <textarea
              className="descripcionTextarea"
              onChange={ (e) => setDescripcion(e.target.value) }
            >
              { descripcionCuadro }
            </textarea>
            { descripcionCuadro }
          </p>
        </div>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default Descripcion;
