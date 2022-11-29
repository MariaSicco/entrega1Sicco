//Calculadora de precios

let maquillaje = Number(prompt("ingresa cuantos labiales deseas llevar"));
let precio = 5;
let compra = maquillaje * precio;
let descuento = compra * 0.15;
let precioFinal = compra - descuento;

if (maquillaje <= 5) {
  alert("El precio final sera " + compra);
} else if (maquillaje <= 10) {
  alert(
    "Felicidades tienes un descuento del 15% de " +
      descuento +
      " Y el precio final sera de " +
      precioFinal
  );
  while (maquillaje >= 5) {
    alert("Recibe un rubor gratis");
    break;
  }
}
