import logo from "@assets/logo2.png";
import { useStore } from "exome/react";
import { globalStore } from "@services/states/GlobalStore";

const Cabecera = ({ titulo }: { titulo: string | null }) => {
  const { Tipo } = useStore(globalStore);

  const title: string = Tipo?.toString() ?? "";

  return (
    <div className="cabecera">
      <img alt="logo" id="logo" src={logo} />
      <p>CEL 320 4265135</p>
      <p></p>
      <h1> {titulo ? titulo : title.toUpperCase()} </h1>
    </div>
  );
};

export default Cabecera;
