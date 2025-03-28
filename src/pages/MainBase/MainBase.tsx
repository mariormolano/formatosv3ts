import FormatoBase from "@layouts/FormatoBase/FormatoBase";
import ListaDeVerificacion from "@layouts/ListaDeVerificacion/ListaDeVerificacion";
import { TitulosFormatosMock } from "@core/mocks/TitulosFormatosMock";

import { useStore } from "exome/react";
import { globalStore } from "@core/stores/GlobalStore";
import { FormatosEnum } from "@core/enums/Listado.enum";

import { useEffect } from "react";

const MainBase = () => {
  const { Tipo, Edificio } = useStore(globalStore);

  //ListaCotizacion

  useEffect(() => {
    console.log("El cliente es: ", Edificio);
  }, [ Edificio ]);

  switch (Tipo) {
    case FormatosEnum.Mantenimiento:
      return (
        <>
          <FormatoBase formato={ TitulosFormatosMock[ 0 ] } />
          <FormatoBase formato={ TitulosFormatosMock[ 1 ] } />
          <ListaDeVerificacion />
        </>
      );
    case FormatosEnum.CuentaDeCobro:
      return <FormatoBase formato={ TitulosFormatosMock[ 0 ] } />;
    case FormatosEnum.Cotizacion:
      return <FormatoBase formato={ TitulosFormatosMock[ 0 ] } />;
  }
};

export default MainBase;
