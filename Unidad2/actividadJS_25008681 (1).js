// Paso 1: Pedir el mes de nacimiento al usuario
let mes = prompt("Ingresa el número de tu mes de nacimiento (1-12):");

// Paso 2: Pedir el día de nacimiento al usuario
let dia = prompt("Ingresa el número de tu día de nacimiento:");

// Paso 3: Convertir los valores a números
mes = parseInt(mes); // Convertimos el mes a número
dia = parseInt(dia); // Convertimos el día a número

// Paso 4: Determinar el signo zodiacal basado en el mes y día
let signo;

// Aquí vamos a usar la lógica para determinar el signo según la tabla

if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
  signo = "Aries";
} else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
  signo = "Tauro";
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
  signo = "Géminis";
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
  signo = "Cáncer";
} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
  signo = "Leo";
} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
  signo = "Virgo";
} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
  signo = "Libra";
} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
  signo = "Escorpio";
} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
  signo = "Sagitario";
} else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
  signo = "Capricornio";
} else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
  signo = "Acuario";
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
  signo = "Piscis";
}

// Paso 5: Mostrar el signo zodiacal al usuario
alert("Tu signo zodiacal es: " + signo);