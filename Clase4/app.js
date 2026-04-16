// ==============================
// 📌 ARRAY DE AUTOS
// ==============================

const autos = [
  { marca: "Toyota", modelo: "Corolla", anio: 2020, color: "rojo" },
  { marca: "Ford", modelo: "Fiesta", anio: 2017, color: "azul" },
  { marca: "Chevrolet", modelo: "Onix", anio: 2019, color: "negro" },
  { marca: "Volkswagen", modelo: "Golf", anio: 2021, color: "blanco" },
  { marca: "Honda", modelo: "Civic", anio: 2018, color: "gris" },
  { marca: "Peugeot", modelo: "208", anio: 2022, color: "rojo" },
  { marca: "Renault", modelo: "Clio", anio: 2016, color: "verde" },
  { marca: "Nissan", modelo: "Sentra", anio: 2023, color: "negro" },
  { marca: "Hyundai", modelo: "Elantra", anio: 2019, color: "azul" },
  { marca: "Kia", modelo: "Rio", anio: 2015, color: "blanco" }
];

// ==============================
// 📌 MOSTRAR AUTOS > 2018
// ==============================

console.log("🚗 Autos posteriores a 2018:");

autos.forEach(auto => {
  if (auto.anio > 2018) {
    console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.anio}, Color: ${auto.color}`);
  }
});

// ==============================
// 📌 FUNCIÓN CONTAR POR COLOR
// ==============================

function contarAutosPorColor(colorBuscado) {
  let contador = 0;

  autos.forEach(({ color }) => {
    if (color === colorBuscado) {
      contador++;
    }
  });

  console.log(`🎨 Autos color ${colorBuscado}: ${contador}`);
}

// ==============================
// 📌 EJECUCIÓN
// ==============================

contarAutosPorColor("rojo");
contarAutosPorColor("negro");
contarAutosPorColor("azul");

console.log("✅ Fin del programa");