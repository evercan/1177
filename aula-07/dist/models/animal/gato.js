"use strict";
//import { Animal } from "./animal";
var Animais;
(function (Animais) {
    class Gato extends Animais.Animal {
        constructor(nome, raca, especie) {
            super(nome, raca);
            this.especie = "";
            this.especie = especie;
        }
        emitirSom() {
            console.log(`O ${this._nome} da raça ${this._raca}, mia: Mia`);
        }
        afofarPelo() {
            console.log(`${this._nome} esta afofando o pelo`);
        }
    }
    Animais.Gato = Gato;
})(Animais || (Animais = {}));
