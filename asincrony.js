console.log("Inicio");

// Operación síncrona
const resultado = 2 + 2;
console.log(resultado); // 4

// Operación asíncrona
setTimeout(() => {
  console.log("Esto se ejecuta después");
}, 1000);

console.log("Fin");
// Output: Inicio, 4, Fin, "Esto se ejecuta después"