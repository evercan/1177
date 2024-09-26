namespace Animais {
    export class Passaro extends Animal{
        private especie: string = "";
        constructor(nome: string, raca: string, especie: string ){
            super(nome, raca);  
            this.especie = especie;      
        }

        emitirSom(): void{
            console.log(`O ${this._nome} da raça ${this._raca}, canta!`)
        }

        voar(): void{
            console.log(`${this._nome} esta voando`);
        }
    }
}