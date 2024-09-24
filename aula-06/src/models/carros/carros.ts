import { Motor } from "./motor";
import { IPropriedadesVeiculo } from "../../types/IPropriedadesVeiculo";
import { IVeiculo } from "../../types/IVeiculos";

export class Carros implements IVeiculo{
    protected _marca: string = "";
    protected _modelo: string = "";
    private _motor: Motor;
    private static _totalCarrosCriados: number = 0;

    constructor(propriedades: IPropriedadesVeiculo){
        this._marca = propriedades.marca;
        this._modelo = propriedades.modelo;
        this._motor = new Motor(propriedades.potenciaMotor);
        Carros._totalCarrosCriados++;
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

    obterInformacoes(): string {
        return `Marca: ${this._marca}, modelo: ${this._modelo} `
    }

    static obterTotalCarrosCriados(): number {
        return Carros._totalCarrosCriados;
    }
}