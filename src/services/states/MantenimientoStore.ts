import { FormatosEnum } from "@enums/Listado.enum";
import { ClientesInterface } from "@interfaces/ClientesInterface";
import { FormatoStoreInterface } from "@interfaces/FormatoStoreInterface";
import { ClientesMock } from "@mocks/ClientesMock";
import { convertToText } from "@modules/ConvertToText";
import { Exome } from "exome";

class MantenimientoStore extends Exome implements FormatoStoreInterface {
  //
  //atributos
  public Mes: string = "";
  public Cliente: ClientesInterface = ClientesMock[0];
  public ValorTotalFinal: number = 0;
  public ValorTotalTexto: string = "";
  public Edificio: string = "";
  public Tipo: FormatosEnum = FormatosEnum.Mantenimiento;

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
  public setValorTotal(ValorTotal: number) {
    this.ValorTotalFinal = ValorTotal;
    this.setValorTotalFormaTexto();
  }
  public setCliente(id: number) {
    this.Cliente = ClientesMock[id];
    this.setEdificio(this.Cliente.edificio);
    this.setValorTotal(this.Cliente.monto);
    console.log("Cliente Mantenimiento", this.Edificio);
  }
  public getValorTotalTexto(): string {
    return this.ValorTotalTexto;
  }
  public setValorTotalFormaTexto() {
    this.ValorTotalTexto =
      this.ValorTotalFinal > 0 ? convertToText(this.ValorTotalFinal) : "";
  }

  //
}

export const mantenimientoStore = new MantenimientoStore();
