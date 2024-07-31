import { TitulosFormatosInterface } from "@interfaces/TitulosFormatosInterface";

export const TitulosFormatosMock: TitulosFormatosInterface[] = [
  {
    CabeceraTitulo: null,
    ReferenciaTitulo: "CUENTA",
    DescripcionTitulo: "POR CONCEPTO DE",
    DescripcionContenido: "MANTENIMIENTO CORRESPONDIENTE AL MES DE ",
    MontoProvedor: true,
  },
  {
    CabeceraTitulo: "COMPROBANTE DE MANTENIMIENTO",
    ReferenciaTitulo: "COMPROBANTE",
    DescripcionTitulo: "OBSERVACIONES",
    DescripcionContenido: "",
    MontoProvedor: false,
  },
];
