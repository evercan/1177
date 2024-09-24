import { IPropriedadesVeiculo } from "../../types/IPropriedadesVeiculo";
import { Carros } from "./carros";
import { Logger } from "../../utils/logger";

export class CarroEsportivo extends Carros{
    private _velocidadeMaxima: number = 0;
    private _ativarModoEsporte: boolean = false;

    constructor(propriedades:IPropriedadesVeiculo, velocidadeMaxima: number){
        super(propriedades);
        this._velocidadeMaxima = velocidadeMaxima;
    }
    
    get ativarModo(): boolean {
        return this._ativarModoEsporte;
    }

    set ativarModo(ativaModoEsporte: boolean) {
        this._ativarModoEsporte = ativaModoEsporte
    }
    
    ativarModoEsporte(): void{
        if(this._ativarModoEsporte){
            Logger.warn('Modo Esporte Ativado! Prepare-se para alta performance!');
        }else{
            console.log('Modo Esporte Inativado')
        }
    }
} 