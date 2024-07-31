import "./ListaDesplegable.css";
import { useMostrarFormatos } from "@hooks";

import { useSelector, useDispatch } from "react-redux";

const ListaDesplegable = ({ lista, tipo }) => {
  const { ListaClientes } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const mostrarFormatos = useMostrarFormatos;
  return (
    <select
      onChange={(e) =>
        mostrarFormatos(
          { lista: tipo, valor: e.target.value },
          ListaClientes,
          dispatch
        )
      }
      defaultValue={"Default"}
      name="Tipo"
      id=""
    >
      <option disabled value="Default">
        Seleccione
      </option>

      {lista.map((opcion, indice) => (
        <option value={opcion} key={indice}>
          {opcion}
        </option>
      ))}
    </select>
  );
};

export default ListaDesplegable;
