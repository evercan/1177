function invertArray<T>(arr:T[]): T[]{
    return arr.reverse();
}


const numeros = [1,2,3,4];
const numerosInvertidos = invertArray<number>(numeros);

const frutas = ["maça", "banana", "uva"];
const frutasInvertidas = invertArray<string>(frutas);

const validacao = [false,false, true];
const ValInvertidas = invertArray<boolean>(validacao);

console.log(numerosInvertidos, frutasInvertidas,ValInvertidas);
