//Exome
import { Exome } from "exome";
//Interfaces
//import { TitulosFormatosInterface } from "@interfaces/TitulosFormatosInterface";
import { ClientesInterface } from "@core/interfaces/ClientesInterface";
//Listados
//import { TitulosFormatosMock } from "@mocks/TitulosFormatosMock";
import { ClientesMock } from "@core/mocks/ClientesMock";
import { FormatosEnum } from "@core/enums/Listado.enum";

class GlobalStore extends Exome {
  public ValorTotal: number = 0;
  //Listados
  public ListaCliente: ClientesInterface[] = ClientesMock;
  //public ListaTitulosFormatos: TitulosFormatosInterface[] = TitulosFormatosMock;
  //Atributos
  public Mes: string = "";
  public Edificio: string = "";
  public Tipo: FormatosEnum | null = null;
  //Métodos
  public setMes(Mes: string) {
    this.Mes = Mes;
  }
  public setEdificio(Edificio: string) {
    this.Edificio = Edificio;
  }
  public setTipo(TipoDeFormato: FormatosEnum) {
    this.Tipo = TipoDeFormato;
  }
}

export const globalStore = new GlobalStore();
