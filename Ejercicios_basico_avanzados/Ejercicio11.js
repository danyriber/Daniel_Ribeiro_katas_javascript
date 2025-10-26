/*Ejercicio 11
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y 
cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:*/



const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];



function averageWord(list) {
  let suma = 0;

  for (const element of list) {
    if (typeof element === "number") {
      suma =  suma + element;              
    } else if (typeof element === String) {
      suma = suma + element.length;       
    }
  }

  return suma / list.length;        
}

console.log(averageWord(mixedElements));

  