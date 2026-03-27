// 1. Array de 10 precios de productos
const precios = [100, 250, 150, 80, 300, 120, 400, 200, 90, 500];

// 2. Calcular precio con IVA 21% para cada valor usando map()
const preciosConIVA = precios.map(precio => {
    return precio * 1.21;
});

// 3. Imprimir cada precio ajustado con template literals
preciosConIVA.forEach(precio => {
    console.log(`El precio es: ${precio}.- IVA incluido.`);
});