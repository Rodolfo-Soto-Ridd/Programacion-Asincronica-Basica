// Función que simula una operación asíncrona
function obtenerDatos(callback) {
  setTimeout(() => {
    const datos = { nombre: "Ana", edad: 25 };
    callback(datos);
  }, 1000);
}

// Uso del callback
obtenerDatos((datos) => {
  console.log("Datos recibidos:", datos);
});