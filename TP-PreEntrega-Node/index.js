import {
    obtenerProductos,
    obtenerProductoPorId,
    agregarProducto,
    eliminarProducto,
    actualizarProducto
} from "./API/apiFakeStore.js";

import { esIdValido } from "./utils/helpers.js";

const args = process.argv.slice(2);
const metodo = args[0]?.toUpperCase();
const endpoint = args[1];
const params = args.slice(2);

async function main() {

    if (!metodo || !endpoint) {
        console.log("❌ Uso incorrecto");
        return;
    }

    switch (metodo) {

        case "GET":
            if (endpoint === "products") {
                const productos = await obtenerProductos();
                productos?.forEach(p => {
                    console.log(`${p.id} - ${p.title} - $${p.price}`);
                });
            }

            else if (endpoint.startsWith("products/")) {
                const id = endpoint.split("/")[1];
                if (!esIdValido(id)) return;

                const producto = await obtenerProductoPorId(id);
                console.log(producto);
            }
            break;

        case "POST":
            if (endpoint === "products") {
                const [title, price, category] = params;

                const nuevo = {
                    title,
                    price: Number(price),
                    category
                };

                const res = await agregarProducto(nuevo);
                console.log("✅ Producto creado:", res);
            }
            break;

        case "DELETE":
            if (endpoint.startsWith("products/")) {
                const id = endpoint.split("/")[1];
                if (!esIdValido(id)) return;

                const res = await eliminarProducto(id);
                console.log("🗑️ Eliminado:", res);
            }
            break;

        case "PUT":
            if (endpoint.startsWith("products/")) {
                const id = endpoint.split("/")[1];
                if (!esIdValido(id)) return;

                const [title, price, category] = params;

                const actualizado = {
                    title,
                    price: Number(price),
                    category
                };

                const res = await actualizarProducto(id, actualizado);
                console.log("✏️ Actualizado:", res);
            }
            break;

        default:
            console.log("❌ Método no válido");
    }
}

main();