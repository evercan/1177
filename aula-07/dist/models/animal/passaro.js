"use strict";
var Animais;
(function (Animais) {
    class Passaro extends Animais.Animal {
        constructor(nome, raca, especie) {
            super(nome, raca);
            this.especie = "";
            this.especie = especie;
        }
        emitirSom() {
            console.log(`O ${this._nome} da raça ${this._raca}, canta!`);
        }
        voar() {
            console.log(`${this._nome} esta voando`);
        }
    }
    Animais.Passaro = Passaro;
})(Animais || (Animais = {}));
