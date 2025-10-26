const words = [
  /*Ejercicio 14
Contador de repeticiones: Crea una función que nos devuelva el número de veces que 
se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:*/
  
  
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];


function repeatCounter(list) {
  const repeatWords = {};
  for (const word of list) {
    if (repeatWords[word]) {
      repeatWords[word]++;
    } else {
      repeatWords[word] = 1;
    }
  }
  return repeatWords;
}
console.log(repeatCounter(words));