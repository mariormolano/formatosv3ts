import "./Proveedor.css";
import { useStore } from "exome/react";
import { globalStore } from "@core/stores/GlobalStore";
import { FormatosEnum } from "@core/enums/Listado.enum";

const Proveedor = () => {
  const { Tipo } = useStore(globalStore);
  return (
    <div>
      <div className="borde3_2">
        { Tipo === FormatosEnum.Cotizacion ? <p>COTIZACIÓN</p> : null }
        { Tipo === FormatosEnum.Mantenimiento ||
          Tipo === FormatosEnum.CuentaDeCobro ? (
          <p>CUENTA DE COBRO</p>
        ) : null }
      </div>

      <div className="datosProveedor">
        <div className="borde1">
          <p>SEÑOR</p>
        </div>
        <div className="borde1">
          <p>DIRECCIÓN</p>
        </div>
        <div className="borde1">
          <p>TELÉFONO</p>
        </div>
        <div className="borde2">
          <p>MARIO ROBERTO MOLANO V.</p>
        </div>
        <div className="borde2">
          <p>CLL6C # 0-42</p>
        </div>
        <div className="borde2">
          <p>3204265135</p>
        </div>
      </div>
      <div className="nit2">
        <div className="borde1">
          <p>NIT:</p>
        </div>
        <div className="borde2">
          <p>80.061.369-4</p>
        </div>
        <div className="borde1">
          <p>E-MAIL:</p>
        </div>
        <div className="borde2">
          <p>gerencia.elevetecno@gmail.com</p>
        </div>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default Proveedor;
