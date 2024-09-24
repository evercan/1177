import { IPropriedadesVeiculo } from "../../types/IPropriedadesVeiculo";
import { Carros } from "./carros";

export class Caminhonete extends Carros{
    private _capacidadeDaCarga: number= 0;
    constructor(propriedades: IPropriedadesVeiculo, capacidadeDaCarga: number){
        super(propriedades)
        this._capacidadeDaCarga = capacidadeDaCarga;
    }    
    // ligar(): void {
    //     console.log(`A caminhonete da marca ${this._marca} e modelo ${this._modelo} esta ligado`);
    // }

    transportarCarga() : void{
        console.log(`A caminhonete ${this._marca} ${this._modelo} esta pronta para o
        Transporte`)
    }
} 