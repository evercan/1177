"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dono = void 0;
class Dono {
    constructor(nome, animal) {
        this.nome = nome;
        this.animal = animal;
    }
    brincarComAnimal() {
        console.log(`${this.nome} esta brincando com ${this.animal.nome}`);
    }
}
exports.Dono = Dono;
