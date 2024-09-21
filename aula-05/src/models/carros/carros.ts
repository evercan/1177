import { Motor } from "./motor";

export class Carros{
    protected _marca: string = "";
    protected _modelo: string = "";
    private _motor: Motor;

    constructor(marca:string,modelo: string, potencia:number =0){
        this._marca = marca;
        this._modelo = modelo;
        this._motor = new Motor(potencia);
    }

    ligar(): void { 
        console.log(`O carro da marca ${this._marca} e modelo ${this._modelo} esta ligado`);
        this._motor.ligar();
    }

    desligar(): void {
        console.log("O carro esta desligado");
    }

    acelerar(): void {
        console.log("O carro esta acelerando");
    }
}