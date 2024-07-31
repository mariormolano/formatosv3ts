import Cabecera from "../../layouts/Cabecera/Cabecera";
import DatosEdificio from "../../layouts/DatosEdificio/DatosEdificio";
import Descripcion from "../../layouts/Descripcion/Descripcion";
import Firma from "../../layouts/Firma/Firma";
import Monto from "../../layouts/Monto/Monto";
import Proveedor from "../../layouts/Proveedor/Proveedor";
import Referencia from "../../layouts/Referencia/Referencia";
import "./Factura.css";

const Factura = () => {
  return (
    <div id="factura_div" className="layout_div">
      <Cabecera titulo="CUENTA DE COBRO" />

      <Referencia titulo="CUENTA" />

      <DatosEdificio />

      <Proveedor />

      <Descripcion titulo="POR CONCEPTO DE" />

      <Monto />

      <Firma />
    </div>
  );
};

export default Factura;
