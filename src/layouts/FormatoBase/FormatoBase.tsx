// CSS
import "./FormatoBase.css";
// Components
import Cabecera from "@layouts/Cabecera/Cabecera";
import DatosEdificio from "@layouts/DatosEdificio/DatosEdificio";
import Descripcion from "@layouts/Descripcion/Descripcion";
import Firma from "@layouts/Firma/Firma";
import Monto from "@layouts/Monto/Monto";
import Proveedor from "@layouts/Proveedor/Proveedor";
import Referencia from "@layouts/Referencia/Referencia";
import SaltoDePagina from "@comp/SaltoDePagina/SaltoDePagina";

import { useStore } from "exome/react";
import { useEffect, useState } from "react";
import { globalStore } from "@core/stores/GlobalStore";
import { TitulosFormatosInterface } from "@core/interfaces/TitulosFormatosInterface";
import { FormatosEnum } from "@core/enums/Listado.enum";
import CotizacionLista from "@comp/CotizacionLista/CotizacionLista";

const FormatoBase = ({ formato }: { formato: TitulosFormatosInterface }) => {
  const {
    CabeceraTitulo,
    ReferenciaTitulo,
    DescripcionTitulo,
    MontoProvedor,
    DescripcionContenido,
  } = formato;

  const [ Titulo, setTitulo ] = useState<string>("");

  const { Tipo, Edificio, Mes } = useStore(globalStore);

  useEffect(() => {
    switch (Tipo) {
      case FormatosEnum.Mantenimiento:
        setTitulo(" Documentación ");
        break;
      case FormatosEnum.CuentaDeCobro:
        setTitulo(" Cuenta de Cobro ");
        break;
      case FormatosEnum.Cotizacion:
        setTitulo(" Cotización ");
        break;
    }
  }, [ Tipo ]);

  useEffect(() => {
    document.title =
      Edificio + Titulo + Mes.toUpperCase() + " " + new Date().getFullYear();
  }, [ Edificio, Mes, Titulo ]);

  return (
    <div className="FormatoBase">
      <Cabecera titulo={ CabeceraTitulo } />
      <Referencia titulo={ ReferenciaTitulo } />
      <DatosEdificio />
      { MontoProvedor ? <Proveedor /> : null }

      { Tipo === FormatosEnum.Cotizacion ? (
        <CotizacionLista />
      ) : (
        <Descripcion
          titulo={ DescripcionTitulo }
          contenido={
            Tipo === FormatosEnum.Mantenimiento ? DescripcionContenido : ""
          }
        />
      ) }
      { MontoProvedor ? <Monto /> : null }
      <Firma />
      { Tipo === FormatosEnum.Mantenimiento && <SaltoDePagina /> }
    </div>
  );
};

export default FormatoBase;
