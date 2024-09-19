export class Pessoa {
    private _nome: string = ""
    private _idade: number = 0
    private _telefone: string = ""
    public estaVivo: boolean = true; // Valor padrão
    
    constructor(nome:string,idade:number )
    {
        this._nome  = nome;
        this._idade = idade;
    }

    get getTelefone(): string{
        return this._telefone;
    }

    set setTelefone(numero_telefone: string){
        if(numero_telefone.length <= 11){
            console.log('Telefone Invalido');            
        }
        this._telefone = numero_telefone;
    }

    nascer(): void{
        console.log(this.getTelefone);
        if(!this.estaVivo){
            console.log(`${this._nome} nasceu!`);
            this.estaVivo =true;
        }else{
            console.log(`${this._nome} já nasceu!`);
        }
    }

    crescer(): void {
        if(this.estaVivo){
            this._idade++;
            console.log(`${this._nome} fez ${this._idade} ano(s)`)
        }else{
            console.log(`${this._nome} não pode crescer, pois faleceu`)
        }
    }

    morrer(): void {
        if(this.estaVivo){
            this.estaVivo = false;
            console.log(`${this._nome} morreu!`)
        }else{
            console.log(`${this._nome} já faleceu`)
        }
    }
}