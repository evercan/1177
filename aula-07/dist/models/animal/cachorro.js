"use strict";
//import { Animal } from "./animal";
var Animais;
(function (Animais) {
    class Cachorro extends Animais.Animal {
        constructor(nome, raca, especie) {
            super(nome, raca);
            this.especie = "";
            this.especie = especie;
        }
        emitirSom() {
            console.log(`O ${this._nome} da raça ${this._raca}, late: Au au`);
        }
        correrAtrasDoRabinho() {
            console.log(`${this._nome} esta correndo atras do seu rabinho`);
        }
    }
    Animais.Cachorro = Cachorro;
})(Animais || (Animais = {}));
