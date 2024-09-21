import { Carros } from "./carros";

export class Caminhonete extends Carros{
    private _capacidadeDaCarga: number= 0;
    constructor(marca: string, modelo:string, capacidadeDaCarga: number, potencia:number){
        super(marca, modelo,potencia)
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