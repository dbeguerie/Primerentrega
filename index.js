
//CALCULAR EDAD

const btnMostrarEdad = document.getElementById("btn-mostrar-edad");
const inputFechaNacimiento = document.getElementById("input-fecha");
btnMostrarEdad.onclick = calcularEdad;

function calcularEdad() {
  const hoy = DateTime.now();
  const valorFechaNacimiento = inputFechaNacimiento.value;
  let cumpleanios = DateTime.fromISO(valorFechaNacimiento);

  const diferencia = hoy.diff(cumpleanios, [
    "years",
    "months",
    "days",
    "hours",
  ]);
  console.log(diferencia.toObject());

  Swal.fire({
    icon: "info",
    title: "Edad",
    text: `Tu edad es: ${diferencia.years} años ${diferencia.months} meses ${
      diferencia.days
    } días ${diferencia.hours.toFixed(2)} horas`,
  });
}
