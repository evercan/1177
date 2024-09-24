import { IPropriedadesVeiculo } from "../../types/IPropriedadesVeiculo";
import { Carros } from "./carros";

export class CarroEletrico extends Carros{
    private _autonomiaBateria : number = 0;

    constructor(propriedades:IPropriedadesVeiculo, autonomiaBateria: number){
        super(propriedades)
        this._autonomiaBateria = autonomiaBateria;
    }

    carregarBateria(): void{
        console.log(`Carregando a bateria do ${this._marca} ${this._modelo}`)
    }
} 