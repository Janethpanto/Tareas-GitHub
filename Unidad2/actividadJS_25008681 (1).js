// Paso 1: Pedir el mes de nacimiento al usuario
let mes = prompt("Ingresa el n�mero de tu mes de nacimiento (1-12):");

// Paso 2: Pedir el d�a de nacimiento al usuario
let dia = prompt("Ingresa el n�mero de tu d�a de nacimiento:");

// Paso 3: Convertir los valores a n�meros
mes = parseInt(mes); // Convertimos el mes a n�mero
dia = parseInt(dia); // Convertimos el d�a a n�mero

// Paso 4: Determinar el signo zodiacal basado en el mes y d�a
let signo;

// Aqu� vamos a usar la l�gica para determinar el signo seg�n la tabla

if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
  signo = "Aries";
} else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
  signo = "Tauro";
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
  signo = "G�minis";
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
  signo = "C�ncer";
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