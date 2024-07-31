import "./Contenido.css";
import ListaDesplegable from "../ListaDesplegable/ListaDesplegable";
import { useSelector } from "react-redux";

const Contenido = () => {
  const { ListaDeFormatos, ListaClientes, ListaMeses } = useSelector(
    (state) => state.states
  );

  const edificios = ListaClientes.map((cliente) => cliente.edificio);

  return (
    <form className="Contenido">
      <ListaDesplegable tipo="formato" lista={ListaDeFormatos} />
      <ListaDesplegable tipo="cliente" lista={edificios} />
      <ListaDesplegable tipo="mes" lista={ListaMeses} />
    </form>
  );
};

export default Contenido;
