import { Carros } from "./carros";

export class CarroEsportivo extends Carros{
    private _velocidadeMaxima: number = 0;
    private _ativarModoEsporte: boolean = false;

    constructor(marca:string, modelo:string, velocidadeMaxima: number, potencia:number){
        super(marca,modelo, potencia);
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
            console.log('Modo Esporte Ativado! Prepare-se para alta performance!');
        }else{
            console.log('Modo Esporte Inativado')
        }
    }
} 