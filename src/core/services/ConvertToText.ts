function convertToText(numero: number): string {
  const valorO = [
    "",
    "UN",
    "DOS",
    "TRES",
    "CUATRO",
    "CINCO",
    "SEIS",
    "SIETE",
    "OCHO",
    "NUEVE",
  ];
  const valorG = ["", "", "", "", "", "QUINIEN", "", "SETE", "OCHO", "NOVE"];
  const valorF = ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE"];
  const valorT = [
    "",
    "DIECI",
    "VEINTI",
    "TREINTA",
    "CUARENTA",
    "CINCUENTA",
    "SESENTA",
    "SETENTA",
    "OCHENTA",
    "NOVENTA",
  ];
  const valorP = ["", "CIEN", "MIL", "MILLON"];

  function procesarGrupo(n: number): string {
    let resultado = "";
    const centenas = Math.floor(n / 100);
    const decenas = Math.floor((n % 100) / 10);
    const unidades = n % 10;

    if (centenas === 1) {
      resultado +=
        decenas === 0 && unidades === 0 ? valorP[1] : valorP[1] + "TO";
    } else if (centenas > 1) {
      resultado +=
        centenas === 5 || centenas === 7 || centenas === 9
          ? valorG[centenas] + (centenas === 5 ? "TOS" : valorP[1] + "TOS")
          : valorO[centenas] + valorP[1] + "TOS";
    }

    if (decenas === 1) {
      if (unidades <= 5) {
        resultado += " " + valorF[unidades];
      } else {
        resultado += " " + valorT[1] + valorO[unidades];
      }
    } else if (decenas === 2) {
      resultado +=
        unidades === 0 ? " VEINTE" : " " + valorT[decenas] + valorO[unidades];
    } else if (decenas > 2) {
      resultado +=
        " " + valorT[decenas] + (unidades > 0 ? " Y " + valorO[unidades] : "");
    } else if (unidades > 0) {
      resultado += " " + valorO[unidades];
    }

    return resultado.trim();
  }

  if (numero === 0) return "CERO PESOS MCTE";

  let resultado = "";
  const grupos = [];
  while (numero > 0) {
    grupos.push(numero % 1000);
    numero = Math.floor(numero / 1000);
  }

  for (let i = grupos.length - 1; i >= 0; i--) {
    if (grupos[i] !== 0) {
      const palabras = procesarGrupo(grupos[i]);
      if (i === 2) {
        resultado +=
          palabras +
          " " +
          (grupos[i] === 1 ? valorP[3] : valorP[3] + "ES") +
          " ";
      } else if (i === 1) {
        resultado += palabras + " " + valorP[2] + " ";
      } else {
        resultado += palabras;
      }
    }
  }

  return resultado.trim();
}

export { convertToText };
