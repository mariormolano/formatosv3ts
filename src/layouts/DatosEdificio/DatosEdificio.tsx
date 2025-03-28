import "./DatosEdificio.css";
import { useStore } from "exome/react";
import { mantenimientoStore } from "@core/stores/MantenimientoStore";
import { cuentaDeCobroStore } from "@core/stores/CuentaDeCobroStore";
import { cotizacionStore } from "@core/stores/CotizaciónStore";
import { globalStore } from "@core/stores/GlobalStore";
import { useEffect, useState } from "react";
import { ClientesInterface } from "@core/interfaces/ClientesInterface";
import { FormatosEnum } from "@core/enums/Listado.enum";

const DatosEdificio = () => {
  //const { FormatoActivo } = useStore(globalStore);
  //const { edificio, direccion, telefono } = FormatoActivo.Cliente;
  const { Cliente: ClienteMantenimiento } = useStore(mantenimientoStore);
  const { Cliente: ClienteCuentaDeCobro } = useStore(cuentaDeCobroStore);
  const { Cliente: ClienteCotizacion } = useStore(cotizacionStore);
  const { Tipo } = useStore(globalStore);

  const [ Cliente, setCliente ] = useState<ClientesInterface>();

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
  }, [ Tipo ]);

  return (
    <div>
      <div className="datosEdificio">
        <div className="borde1">
          <p>EDIFICIO</p>
        </div>
        <div className="borde1">
          <p>DIRECCIÓN</p>
        </div>
        <div className="borde1">
          <p>TELÉFONO</p>
        </div>
        <div className="borde2">
          <p id="edificio_factura">{ Cliente?.edificio }</p>
        </div>
        <div className="borde2">
          <p id="dicreccion_factura">{ Cliente?.direccion }</p>
        </div>
        <div className="borde2">
          <p id="telefono_factura">{ Cliente?.telefono }</p>
        </div>
      </div>
      <div className="nit">
        <div className="borde1">
          <p>NIT:</p>
        </div>
        <div className="borde2">&nbsp;</div>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default DatosEdificio;
