import "./DatosAscensor.css";
import { useStore } from "exome/react";
import { globalStore } from "@services/states/GlobalStore";
import { mantenimientoStore } from "@services/states/MantenimientoStore";
import { cuentaDeCobroStore } from "@services/states/CuentaDeCobroStore";
import { cotizacionStore } from "@services/states/CotizaciónStore";
import { FormatosEnum } from "@enums/Listado.enum";
import { ClientesInterface } from "@interfaces/ClientesInterface";
import { useEffect, useState } from "react";

const DatosAscensor = () => {
  const { Tipo } = useStore(globalStore);
  const [Cliente, setCliente] = useState<ClientesInterface>();
  const { Cliente: ClienteMantenimiento } = useStore(mantenimientoStore);
  const { Cliente: ClienteCuentaDeCobro } = useStore(cuentaDeCobroStore);
  const { Cliente: ClienteCotizacion } = useStore(cotizacionStore);

  useEffect(() => {
    switch (Tipo) {
      case FormatosEnum.Mantenimiento:
        setCliente(ClienteMantenimiento);
        break;
      case FormatosEnum.CuentaDeCobro:
        setCliente(ClienteCuentaDeCobro);
        break;
      case FormatosEnum.Cotizacion:
        setCliente(ClienteCotizacion);
        break;
    }
  }, [Tipo]);

  //const { edificio, direccion, id, telefono } = FormatoActivo.Cliente;
  return (
    <div className="gl1" id="gl1">
      <div className="ce6">EDIFICIO</div>
      <div className="ce17">
        <p id="edificio_lv">{Cliente?.edificio}</p>
      </div>
      <div className="ce6">AÑO</div>
      <div className="ce17">2024</div>
      <div className="ce6">DIRECCIÓN</div>
      <div className="ce17">
        <p id="direccion_lv">{Cliente?.direccion}</p>
      </div>
      <div className="ce6">ASCENSOR</div>
      <div className="ce17">1</div>
      <div className="ce6">CODIGO CLIENTE</div>
      <div className="ce17">
        <p id="codigo_lv">{Cliente?.id}</p>
      </div>
      <div className="ce6">TELEFONO</div>
      <div className="ce17">
        <p id="telefono_lv">{Cliente?.telefono}</p>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default DatosAscensor;
