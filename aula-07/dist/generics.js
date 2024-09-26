"use strict";
function invertArray(arr) {
    return arr.reverse();
}
const numeros = [1, 2, 3, 4];
const numerosInvertidos = invertArray(numeros);
const frutas = ["maça", "banana", "uva"];
const frutasInvertidas = invertArray(frutas);
const validacao = [false, false, true];
const ValInvertidas = invertArray(validacao);
console.log(numerosInvertidos, frutasInvertidas, ValInvertidas);
