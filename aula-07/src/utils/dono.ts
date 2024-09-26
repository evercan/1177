export class Dono<T extends Animais.Animal> {
    constructor(public nome:string, public animal:T){}

    brincarComAnimal(): void{
        console.log(`${this.nome} esta brincando com ${this.animal.nome}`)
    }
}