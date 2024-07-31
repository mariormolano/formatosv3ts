import { CotizacionInterface } from "@interfaces/CotizacionInterface";
import { CotizacionModel } from "@models/CotizacionModel";
import { FormatosEnum } from "@enums/Listado.enum";
import { ClientesInterface } from "@interfaces/ClientesInterface";
import { FormatoStoreInterface } from "@interfaces/FormatoStoreInterface";
import { ClientesMock } from "@mocks/ClientesMock";
import { convertToText } from "@modules/ConvertToText";
import { Exome } from "exome";

class CotizacionStore extends Exome implements FormatoStoreInterface {
  //
  //atributos
  public Mes: string = "";
  public Cliente: ClientesInterface = ClientesMock[0];
  public ValorTotalFinal: number = 0;
  public ValorTotalTexto: string = "";
  public Edificio: string = "";
  public Tipo: FormatosEnum = FormatosEnum.CuentaDeCobro;
  public ListaCotizacion: CotizacionInterface[] =
    new Array<CotizacionInterface>(20).fill(new CotizacionModel());

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
    console.log("Cliente Cotización", this.Edificio);
  }

  public getValorTotalTexto(): string {
    return this.ValorTotalTexto;
  }

  public setDescripcion(descripcion: string, indice: number) {
    this.ListaCotizacion[indice].descripcion = descripcion;
  }

  public setListaCotizacion(ListaCotizacion: CotizacionInterface) {
    this.ListaCotizacion[ListaCotizacion.id ?? 0] = ListaCotizacion;
    this.setValorTotal(
      ListaCotizacion.valorUnitario,
      ListaCotizacion.cantidad,
      ListaCotizacion.id
    );
  }

  public setValorTotal(
    cantidad: number,
    valorUnitario: number,
    indice: number | null
  ) {
    if (typeof cantidad === "number" && typeof valorUnitario === "number") {
      this.ListaCotizacion[indice ?? 0].valorTotal = cantidad * valorUnitario;
    } else {
      this.ListaCotizacion[indice ?? 0].valorTotal = 0;
    }
    this.setValorTotalFinal();
  }

  public setValorTotalFinal() {
    this.ValorTotalFinal = 0;
    this.ListaCotizacion.map((cotizacion: CotizacionInterface) => {
      if (typeof cotizacion.valorTotal === "number") {
        this.ValorTotalFinal += cotizacion.valorTotal;
      }
    });
    this.setValorTotalFormaTexto();
  }
  public setValorTotalFormaTexto() {
    this.ValorTotalTexto =
      this.ValorTotalFinal > 0 ? convertToText(this.ValorTotalFinal) : "";
  }
  //
}

export const cotizacionStore = new CotizacionStore();
