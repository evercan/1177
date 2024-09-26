"use strict";
var Animais;
(function (Animais) {
    class Animal {
        constructor(nome, raca) {
            this._nome = "";
            this._raca = "";
            this._nome = nome;
            this._raca = raca;
        }
        get nome() {
            return this._nome;
        }
        correr() {
            return `O animal ${this._nome} corre rapido`;
        }
    }
    Animais.Animal = Animal;
})(Animais || (Animais = {}));
