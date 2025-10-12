

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumaNumeros(numeros) {
  let resultado = "";
  for (numero of numeros) {
    if (numero < resultado) { 
    numero = (resultado + numero) }
    resultado = numero
  }
    console.log(resultado)

}

sumaNumeros(numbers);