/*
Ejercicio 17
For...in: Usa un for...in para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

Puedes usar este objeto:*/

const aliens = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const alien in aliens) {
    console.log(`La propiedad ${alien} tiene como valor: ${aliens[alien]}`);
}