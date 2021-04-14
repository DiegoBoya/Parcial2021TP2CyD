/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo 
 * solo los numeros pares y solo numeros impares respectivamente
 */

//pusheando los elementos a un nuevo array
const arrayPares = [];
const even = function(numbers){
    numbers.forEach(number => {
        if(number%2 === 0){
    
        arrayPares.push(number);
    }  
    })
    return arrayPares;
}

//utilizando filter
const odd = function(numbers){
    const impares = numbers.filter( number => number%2 !== 0);
    return impares;
}


// TESTS (no modificar)
const arrEqual = (a1,a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4,2,6,1,0,2,5]),[4,2,6,0,2]));
console.log(arrEqual(odd([4,2,6,1,0,2,5]),[1,5]));
