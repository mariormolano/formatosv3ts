enum FormatosEnum {
  Mantenimiento = "Mantenimiento",
  CuentaDeCobro = "Cuenta de cobro",
  Cotizacion = "Cotización",
}

const ListaDeFormatos: FormatosEnum[] = [
  FormatosEnum.Mantenimiento,
  FormatosEnum.CuentaDeCobro,
  FormatosEnum.Cotizacion,
];

const ListaMeses: string[] = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export { ListaDeFormatos, ListaMeses, FormatosEnum };
