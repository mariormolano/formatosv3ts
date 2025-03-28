import "./App.css";
//import Contenido from "@comp/Contenido/Contenido";
import Stepper from "@pages/Stepper/Stepper";
import MainBase from "@pages/MainBase/MainBase";

// Exome
import { useStore } from "exome/react";
import { globalStore } from "@core/stores/GlobalStore";

function App() {
  const { Mes, Edificio } = useStore(globalStore);

  if (Edificio && Mes) {
    return (
      <div className="App">
        <MainBase />
      </div>
    );
  } else {
    return <Stepper />;
  }
}

export default App;
