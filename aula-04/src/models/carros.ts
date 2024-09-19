export class Carros{
    private _marca: string = "";
    private _modelo: string = "";

    constructor(marca:string){
        this._marca = marca;
    }

    set modelo(modelo:string){
        this._modelo = modelo;
    }

    get modelo(): string{
        return this.modelo;
    }

    ligar(): void {
        console.log(`O carro da marca ${this._marca} e modelo ${this._modelo} esta ligado`);
    }

    desligar(): void {
        console.log("O carro esta desligado");
    }

    acelerar(): void {
        console.log("O carro esta acelerando");
    }
}