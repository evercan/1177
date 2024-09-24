export class Motor {
    private _potencia: number = 0;
    private _ligarMotor: boolean = false;

    constructor(potencia: number){
        this._potencia = potencia;
    }

    ligar(): void{
        if(!this._ligarMotor){
            this._ligarMotor = true;
            console.log("Motor ligado");
        }else{
            console.log("Motor já esta ligado");
        }        
    }

    desligar(): void{
        console.log("Motor desligado");
    }

    obterPotencia(): number{
        return this._potencia;
    }

}