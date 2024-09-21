import { Carros } from "./carros";

export class CarroEletrico extends Carros{
    private _autonomiaBateria : number = 0;

    constructor(marca:string, modelo:string,autonomiaBateria: number, potencia:number=0){
        super(marca,modelo,potencia)
        this._autonomiaBateria = autonomiaBateria;
    }

    carregarBateria(): void{
        console.log(`Carregando a bateria do ${this._marca} ${this._modelo}`)
    }
} 