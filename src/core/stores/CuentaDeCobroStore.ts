import { FormatosEnum } from "@core/enums/Listado.enum";
import { ClientesInterface } from "@core/interfaces/ClientesInterface";
import { FormatoStoreInterface } from "@core/interfaces/FormatoStoreInterface";
import { ClientesMock } from "@core/mocks/ClientesMock";
import { convertToText } from "@core/services/ConvertToText";
import { Exome } from "exome";

class CuentaDeCobroStore extends Exome implements FormatoStoreInterface {
  //
  //atributos
  public Mes: string = "";
  public Cliente: ClientesInterface = ClientesMock[0];
  public ValorTotalFinal: number = 0;
  public ValorTotalTexto: string = "";
  public Edificio: string = "";
  public Tipo: FormatosEnum = FormatosEnum.CuentaDeCobro;

  //métodos
  public setMes(Mes: string) {
    this.Mes = Mes;
  }
  public getEdificio(): string {
    return this.Edificio;
  }
  public setEdificio(Edificio: string) {
    this.Edificio = Edificio;
  }
  public setCliente(id: number) {
    this.Cliente = ClientesMock[id];
    this.setEdificio(this.Cliente.edificio);
    console.log("Cliente Cuenta de Cobro", this.Edificio);
  }
  public getValorTotalTexto(): string {
    return this.ValorTotalTexto;
  }
  public setValorTotal(ValorTotal: number) {
    this.ValorTotalFinal = ValorTotal;
    this.setValorTotalFormaTexto();
  }
  public setValorTotalFormaTexto() {
    this.ValorTotalTexto =
      this.ValorTotalFinal > 0 ? convertToText(this.ValorTotalFinal) : "";
  }
  //
}

export const cuentaDeCobroStore = new CuentaDeCobroStore();
