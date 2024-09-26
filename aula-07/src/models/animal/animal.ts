namespace Animais {
    export abstract class Animal{
        protected _nome: string = "";
        protected _raca: string = "";

        constructor(nome:string, raca:string){
            this._nome = nome;
            this._raca = raca;
        }

        get nome(): string{
            return this._nome
        }

        // Metodo que eu forço as subclasses a implementar
        abstract emitirSom(): void;

        correr(): string{
            return `O animal ${this._nome} corre rapido`
        }

    }
}