import "./Stepper.css";

import { useState } from "react";

import { useStore } from "exome/react";
import { globalStore } from "@core/stores/GlobalStore";
import { ListaDeFormatos, ListaMeses, FormatosEnum } from "@core/enums/Listado.enum";
import { mantenimientoStore } from "@core/stores/MantenimientoStore";
import { cuentaDeCobroStore } from "@core/stores/CuentaDeCobroStore";
import { cotizacionStore } from "@core/stores/CotizaciónStore";

const Stepper = () => {
  const [ activeStep, setActiveStep ] = useState(1);

  const {
    //FormatoActivo,
    ListaCliente,
    Tipo,
    setTipo,
    Edificio,
    setEdificio,
    Mes,
    setMes,

    //setTipoDeFormato,
    //setCliente,
  } = useStore(globalStore);

  const { setCliente: setClienteMantenimiento } = useStore(mantenimientoStore);
  const { setCliente: setClienteCuentaDeCobro } = useStore(cuentaDeCobroStore);
  const { setCliente: setClienteCotizacion } = useStore(cotizacionStore);

  const edificios = ListaCliente.map((cliente) => cliente.edificio);

  return (
    <div className="Stepper">
      <section>
        { activeStep == 1 ? (
          <div>
            <h2>Formatos: { Tipo }</h2>
            <section>
              { ListaDeFormatos.map((formato: FormatosEnum) => (
                <div onClick={ () => setTipo(formato) } key={ formato }>
                  { formato }
                </div>
              )) }
            </section>
          </div>
        ) : null }
        { activeStep === 2 ? (
          <div>
            <h2>Edificio: { Edificio }</h2>
            <section>
              { edificios.map((edificio, id) => (
                <div
                  onClick={ () => {
                    setEdificio(edificio);
                    switch (Tipo) {
                      case FormatosEnum.Mantenimiento:
                        setClienteMantenimiento(id);
                        break;
                      case FormatosEnum.CuentaDeCobro:
                        setClienteCuentaDeCobro(id);
                        break;
                      case FormatosEnum.Cotizacion:
                        setClienteCotizacion(id);
                        break;
                    }
                  } }
                  key={ id }
                >
                  { edificio }
                </div>
              )) }
            </section>
          </div>
        ) : null }
        { activeStep === 3 ? (
          <div>
            <div>
              <h2>Mes: { Mes }</h2>
              <section>
                { ListaMeses.map((mes) => (
                  <div
                    onClick={ () => {
                      setMes(mes);
                      switch (Tipo) {
                        case FormatosEnum.Mantenimiento:
                          mantenimientoStore.setMes(mes);
                          break;
                        case FormatosEnum.CuentaDeCobro:
                          cuentaDeCobroStore.setMes(mes);
                          break;
                        case FormatosEnum.Cotizacion:
                          cotizacionStore.setMes(mes);
                          break;
                      }
                    } }
                    key={ mes }
                  >
                    { mes }
                  </div>
                )) }
              </section>
            </div>
          </div>
        ) : null }
      </section>
      <section>
        <button
          onClick={ () => setActiveStep(activeStep - 1) }
          disabled={ activeStep === 1 }
        >
          Back
        </button>
        <button
          onClick={ () => setActiveStep(activeStep + 1) }
          disabled={
            (activeStep === 1 && !Tipo) ||
            (activeStep === 2 && !Edificio) ||
            (activeStep === 3 && !Mes)
          }
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default Stepper;
