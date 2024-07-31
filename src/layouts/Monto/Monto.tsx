import "./Monto.css";

import { useStore } from "exome/react";
import { mantenimientoStore } from "@services/states/MantenimientoStore";
import { cuentaDeCobroStore } from "@services/states/CuentaDeCobroStore";
import { cotizacionStore } from "@services/states/CotizaciónStore";
import { globalStore } from "@services/states/GlobalStore";
import { FormatosEnum } from "@enums/Listado.enum";
import { useEffect, useState } from "react";

const Monto = () => {
  const { Tipo } = useStore(globalStore);
  const [monto, setMonto] = useState<string>();
  const [montoTexto, setMontoTexto] = useState<string>();

  const {
    ValorTotalFinal: ValorTotalMantenimiento,
    ValorTotalTexto: ValorTotalTextoMantenimiento,
  } = useStore(mantenimientoStore);

  const {
    ValorTotalFinal: ValorTotalCuentaDeCobro,
    ValorTotalTexto: ValorTotalTextoCuentaDeCobro,
    setValorTotal,
  } = useStore(cuentaDeCobroStore);

  const {
    ValorTotalFinal: ValorTotalCotizacion,
    ValorTotalTexto: ValorTotalTextoCotizacion,
  } = useStore(cotizacionStore);

  useEffect(() => {
    switch (Tipo) {
      case FormatosEnum.Mantenimiento:
        setMonto(ValorTotalMantenimiento.toString());
        setMontoTexto(ValorTotalTextoMantenimiento);
        break;
      case FormatosEnum.CuentaDeCobro:
        setMonto(ValorTotalCuentaDeCobro.toString());
        setMontoTexto(ValorTotalTextoCuentaDeCobro);
        break;
      case FormatosEnum.Cotizacion:
        setMonto(ValorTotalCotizacion.toString());
        setMontoTexto(ValorTotalTextoCotizacion);
        break;
    }
  }, [
    Tipo,
    ValorTotalMantenimiento,
    ValorTotalCuentaDeCobro,
    ValorTotalCotizacion,
  ]);

  return (
    <div>
      <div className="borde3">
        <p>LA SUMA DE</p>
      </div>
      <div className="valor">
        <div className="bordeValor">
          <p>LETRAS</p>
        </div>
        <div className="bordeValor2">
          <p id="valor_letras_factura">
            {montoTexto} {montoTexto && "PESOS M/C"}
          </p>
        </div>
        <div className="bordeValor">
          <p>NÚMEROS</p>
        </div>
        <div className="bordeValor2">
          {Tipo === FormatosEnum.CuentaDeCobro && (
            <input
              type="text"
              onChange={(e) => {
                console.log(isNaN(parseInt(e.target.value)));

                setValorTotal(
                  isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
                );
              }}
              value={monto}
            />
          )}
          $ {monto}
        </div>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default Monto;
