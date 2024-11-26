const productos = ["Refrigerador", "Microondas", "Licuadora", "Lavadora", "Plancha", "Televisor"];

// a. Acceder a elementos arbitrarios
console.log(productos[0]);
console.log(productos[3]);
console.log(productos[5]);

// b. Extraer el primer elemento y moverlo al final
const primerElemento = productos.shift();
productos.push(primerElemento);
console.log(productos);

// c. Agregar dos nuevos productos
productos.push("Tostadora", "Freezer");
console.log(productos);

// d. Mostrar la cantidad de elementos
console.log(`Cantidad de elementos: ${productos.length}`);

// e. Buscar un producto
const productoBuscado = "Televisor";
if (productos.includes(productoBuscado)) {
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
}

// f. Unificar elementos en una sola cadena
const cadenaDeProductos = productos.join(" ");
console.log(cadenaDeProductos);

// g. Determinar la cantidad de caracteres
console.log(`Cantidad de caracteres en la cadena: ${cadenaDeProductos.length}`);

// h. Cambiar el nombre de un producto
const cadenaModificada = cadenaDeProductos.replace("Licuadora", "Procesador de Alimentos");
console.log(cadenaModificada);

// i. Generar un nuevo array
const nuevoArray = cadenaModificada.split(" ");
console.log(nuevoArray);
