import "./Firma.css";
import firma from "@assets/firma.png";

const Firma = () => {
  return (
    <div>
      <div className="borde1">
        <p>FIRMA</p>
      </div>
      <p>&nbsp;</p>

      <img className="firma" alt="" src={firma} />

      <div className="linea_firma">
        <p>MARIO R MOLANO</p>
      </div>
    </div>
  );
};

export default Firma;
