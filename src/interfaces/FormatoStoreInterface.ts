import { ClientesInterface } from "./ClientesInterface";
import { FormatosEnum } from "@enums/Listado.enum";

export interface FormatoStoreInterface {
  //atributos
  Mes: string;
  Cliente: ClientesInterface;
  ValorTotalFinal: number;
  ValorTotalTexto: string;
  Edificio: string;
  Tipo: FormatosEnum;
  //métodos
  setMes(Mes: string): void;
  getEdificio(): string;
  setEdificio(Edificio: string): void;
  setCliente(id: number): void;
  getValorTotalTexto(): string;
}
