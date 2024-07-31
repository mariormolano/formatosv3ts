import Cabecera from "../../layouts/Cabecera/Cabecera";
import DatosEdificio from "../../layouts/DatosEdificio/DatosEdificio";
import Descripcion from "../../layouts/Descripcion/Descripcion";
import Firma from "../../layouts/Firma/Firma";
import Referencia from "../../layouts/Referencia/Referencia";
import "./Comprobante.css";

const Comprobante = () => {
  return (
    <div id="Comprobante_div" className="layout_div">
      <Cabecera titulo="COMPROBANTE DE MANTENIEMIENTO" />

      <Referencia titulo="COMPROBANTE" />

      <DatosEdificio />

      <Descripcion titulo="OBSERVACIONES" />

      <Firma />
    </div>
  );
};

export default Comprobante;
