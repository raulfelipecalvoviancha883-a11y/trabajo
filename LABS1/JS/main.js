    let nombreProducto = " teclado gamer ";
let precio = 120000;
let cantidad = 2;
let descuento = 10000;
let disponible = true;

let nombreLimpio = nombreProducto.trim();

let nombreMayusculas = nombreLimpio.toUpperCase();

let contieneGamer = nombreLimpio.toLowerCase().includes("gamer");

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularTotal(subtotal, descuento) {
    return subtotal - descuento;
}

let subtotal = calcularSubtotal(precio, cantidad);
let total = calcularTotal(subtotal, descuento);

let categorias = [
    "Periféricos",
    "Gaming",
    "Tecnología"
];

let producto = {
    nombre: nombreLimpio,
    precio: precio,
    cantidad: cantidad,
    disponible: disponible,
    categorias: categorias
};

console.log("Primera categoría:", categorias[0]);
console.log("Cantidad de categorías:", categorias.length);

console.log("Objeto producto:");
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log("------ RESUMEN DE COMPRA ------");
console.log("Producto:", nombreMayusculas);
console.log("Precio unitario:", precio);
console.log("Cantidad:", cantidad);
console.log("Subtotal:", subtotal);
console.log("Descuento:", descuento);
console.log("Total a pagar:", total);
console.log("Producto disponible:", disponible);
console.log("Contiene palabra clave gamer:", contieneGamer);

if (total >= 200000 && disponible) {
    console.log("Aplica envío gratis");
} else {
    console.log("No aplica envío gratis"); }