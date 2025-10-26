/*Ejercicio 10
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar
 esa funcionalidad en la siguiente función.*/



const valores = [12, 21, 38, 5, 45, 37, 6];
function promedioNum(numeros) {
    let promedio = 0;
    for ( const numero of numeros) {
        promedio = promedio + numero;
    }
    promedio = promedio /numeros.length;
    console.log(promedio)
}

promedioNum(valores)

