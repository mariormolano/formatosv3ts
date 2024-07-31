import { CotizacionInterface } from "@interfaces/CotizacionInterface";

export class CotizacionModel implements CotizacionInterface {
  public id = null;
  public descripcion = "";
  public cantidad = 0;
  public valorUnitario = 0;
  public valorTotal = 0;
}
