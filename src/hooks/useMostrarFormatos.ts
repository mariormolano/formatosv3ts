import {
  setMes,
  setTipoDeFormato,
  setEdificio,
  setCliente,
} from "@states/states";

export const useMostrarFormatos = (
  { lista, valor },
  ListaClientes,
  dispatch
) => {
  console.log("lista:", lista);

  if (lista === "formato") dispatch(setTipoDeFormato(valor));
  if (lista === "cliente") {
    dispatch(setEdificio(valor));
    const BusquedaCliente = ListaClientes.filter(
      (cli) => cli.edificio === valor
    );
    dispatch(setCliente(BusquedaCliente[0]));
  }
  if (lista === "mes") dispatch(setMes(valor));
};
