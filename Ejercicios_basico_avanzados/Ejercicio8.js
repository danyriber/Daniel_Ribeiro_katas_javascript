/*Ejercicio 8
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/


const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];



function palabraMasLarga(palabras) {  /* Palabras es el parametro temporal q le ponemos, es para que despues metamos avengers o lo que queramos para reutilizar */
    let masLarga = "";
    for (const palabra of palabras) {
        if(palabra.length > masLarga.length) {
            masLarga = palabra;
        }
    }
    console.log(masLarga)
}

palabraMasLarga(avengers);