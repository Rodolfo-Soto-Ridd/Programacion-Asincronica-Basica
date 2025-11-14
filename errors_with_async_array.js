async function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;
      if (exito) {
        resolve("Éxito");
      } else {
        reject(new Error("Falló"));
      }
    }, 500);
  });
}

async function main() {
  try {
    const resultado = await operacionAsincrona();
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Error:", error.message);
    // Manejo específico de errores
    if (error.message.includes("Falló")) {
      console.log("Reintentando...");
      // Lógica de reintento
    }
  }
}