import "./Referencia.css";

import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useStore } from "exome/react";

import { globalStore } from "@core/stores/GlobalStore";
import { mantenimientoStore } from "@core/stores/MantenimientoStore";
import { cuentaDeCobroStore } from "@core/stores/CuentaDeCobroStore";
import { cotizacionStore } from "@core/stores/CotizaciónStore";

import { ListaMeses } from "@core/enums/Listado.enum";
import { FormatosEnum } from "@core/enums/Listado.enum";

const Referencia = ({ titulo }: { titulo: string }) => {
  //
  const { Mes, Tipo } = useStore(globalStore);
  const { Cliente: MantenimientoID } = useStore(mantenimientoStore);
  const { Cliente: CuentaDeCobroID } = useStore(cuentaDeCobroStore);
  const { Cliente: CotizacionID } = useStore(cotizacionStore);

  const [ fecha, setFecha ] = useState("XX/XX/XXXX");

  const [ id, setId ] = useState(0);
  const [ TipoCodigo, setTipoCodigo ] = useState("");

  const numeroMes = ListaMeses.findIndex((indiceMes) => indiceMes === Mes) + 1;
  const mesCodigo =
    numeroMes.toString().length === 1
      ? "0" + numeroMes.toString()
      : numeroMes.toString();

  useEffect(() => {
    switch (Tipo) {
      case FormatosEnum.Mantenimiento:
        setId(parseInt(MantenimientoID.id));
        setTipoCodigo("M");
        break;
      case FormatosEnum.CuentaDeCobro:
        setId(parseInt(CuentaDeCobroID.id));
        setTipoCodigo("C");
        break;
      case FormatosEnum.Cotizacion:
        setId(parseInt(CotizacionID.id));
        setTipoCodigo("T");
        break;
    }
  }, [ Tipo ]);

  const cambioFecha = (e: BaseSyntheticEvent) => {
    const fechaEntrada = e.target.value.replaceAll("-", " ");
    const convertirFecha = new Date(fechaEntrada);
    const fechaDia = convertirFecha.getDate().toString();
    const fechaMes = (convertirFecha.getMonth() + 1).toString();
    const fechaAnho = convertirFecha.getFullYear().toString();
    const fechaDiaTexto = fechaDia.length === 1 ? "0" + fechaDia : fechaDia;
    const fechaMesTexto = fechaMes.length === 1 ? "0" + fechaMes : fechaMes;
    setFecha(fechaDiaTexto + "/" + fechaMesTexto + "/" + fechaAnho);
  };
  return (
    <div className="Referencia">
      <div className="borde1">
        <p>FECHA DE REMISIÓN:</p>
      </div>
      <div className="borde2 fecha--container">
        <input type="date" className="fecha" onChange={ cambioFecha } />
        <p id="fecha_factura">{ fecha }</p>
      </div>
      <div className="borde1">
        <p>{ titulo } NUMERO:</p>
      </div>
      <div className="borde2">
        <p id="codigo_factura">
          { TipoCodigo }
          { id }-25{ mesCodigo }
        </p>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default Referencia;
