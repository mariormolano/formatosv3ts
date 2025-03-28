import "./CotizacionLista.css";

//import { useEffect } from "react";
import { useStore } from "exome/react";
//import { globalStore } from "@services/states/GlobalStore";
import { cotizacionStore } from "@core/stores/CotizaciónStore";
//import { CotizacionInterface } from "@interfaces/CotizacionInterface";

const CotizacionLista = () => {
  const { ListaCotizacion, setListaCotizacion } = useStore(cotizacionStore);

  // agregar los campos de la cotización

  return (
    <div>
      <div className="borde3">
        <p> VALORES </p>
      </div>
      <div className="borde2">
        <div className="texto_descripcion">
          <div className="Cotizacion">
            <div className="id borde1">Item</div>
            <div className="descripcion borde1">Descripción</div>
            <div className="cantidad borde1">Cantidad</div>
            <div className="valorUnitario borde1">Valor Unitario</div>
            <div className="valorTotal borde1">Valor Total</div>
          </div>
          { ListaCotizacion.map((_, indice: number) => {
            return (
              <div key={ indice } className="Cotizacion">
                <div className="id borde2">
                  { typeof ListaCotizacion[ indice ].id === "number" &&
                    ListaCotizacion[ indice ].descripcion
                    ? ListaCotizacion[ indice ].id + 1
                    : null }
                </div>
                <div className="descripcion borde2">
                  <input
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    value={ ListaCotizacion[ indice ].descripcion }
                    onChange={ (e) => {
                      setListaCotizacion({
                        ...ListaCotizacion[ indice ],
                        descripcion: e.target.value,
                        id: indice,
                      });
                    } }
                  />
                  { ListaCotizacion[ indice ].descripcion }
                </div>
                <div className="cantidad borde2">
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    value={
                      ListaCotizacion[ indice ].cantidad === 0
                        ? ""
                        : ListaCotizacion[ indice ].cantidad
                    }
                    pattern="[0-9]{1,3}"
                    onChange={ (e) => {
                      setListaCotizacion({
                        ...ListaCotizacion[ indice ],
                        cantidad:
                          typeof parseInt(e.target.value) === "number" &&
                            e.target.value.length > 0
                            ? parseInt(e.target.value)
                            : 0,
                        id: indice,
                      });
                    } }
                  />
                  { ListaCotizacion[ indice ].cantidad > 0
                    ? ListaCotizacion[ indice ].cantidad
                    : null }
                </div>
                <div className="valorUnitario borde2">
                  <input
                    type="number"
                    name="valorUnitario"
                    id="valorUnitario"
                    value={
                      ListaCotizacion[ indice ].valorUnitario === 0
                        ? ""
                        : ListaCotizacion[ indice ].valorUnitario
                    }
                    pattern="[0-9]{1,3}"
                    onChange={ (e) => {
                      setListaCotizacion({
                        ...ListaCotizacion[ indice ],
                        valorUnitario:
                          typeof parseInt(e.target.value) === "number" &&
                            e.target.value.length > 0
                            ? parseInt(e.target.value)
                            : 0,
                        id: indice,
                      });
                    } }
                  />
                  { ListaCotizacion[ indice ].valorUnitario > 0
                    ? ListaCotizacion[ indice ].valorUnitario
                    : null }
                </div>
                <div className="valorTotal borde3">
                  { ListaCotizacion[ indice ].valorTotal > 0
                    ? ListaCotizacion[ indice ].valorTotal
                    : null }
                </div>
              </div>
            );
          }) }
        </div>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default CotizacionLista;
