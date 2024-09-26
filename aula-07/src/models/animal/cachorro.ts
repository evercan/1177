//import { Animal } from "./animal";

namespace Animais {
    export class Cachorro extends Animal{
        private especie: string = "";
        constructor(nome: string, raca: string, especie: string ){
            super(nome, raca);  
            this.especie = especie;      
        }

        emitirSom(): void{
            console.log(`O ${this._nome} da raça ${this._raca}, late: Au au`)
        }

        correrAtrasDoRabinho(): void{
            console.log(`${this._nome} esta correndo atras do seu rabinho`);
        }
    }
}