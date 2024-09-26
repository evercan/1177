//import { Animal } from "./animal";

namespace Animais {
    export class Gato extends Animal{
        private especie: string = "";
        constructor(nome: string, raca: string, especie: string ){
            super(nome, raca);  
            this.especie = especie;      
        }

        emitirSom(): void{
            console.log(`O ${this._nome} da raça ${this._raca}, mia: Mia`)
        }

        afofarPelo(): void{
            console.log(`${this._nome} esta afofando o pelo`);
        }
    }
}