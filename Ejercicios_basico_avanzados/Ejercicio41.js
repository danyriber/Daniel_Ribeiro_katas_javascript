/*Ejercicio 41
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos 
que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre 
la función de JavaScript Math.random()*/

function rollDice(caras) {
  const result = Math.floor(Math.random() * caras) + 1;
  return result;
}

/* apuntes para mi 
1️) Math.random() → número entre 0 y 1
2️) * caras → número entre 0 y caras
3️) Math.floor(...) → quita los decimales (redondea hacia abajo)
4️) + 1 → para que empiece en 1 y no en 0
esto me ha costado y me cuesta entenderlo
*/