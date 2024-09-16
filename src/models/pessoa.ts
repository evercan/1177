export class Pessoa {
    nome: string = ""
    idade: number = 0
    estaVivo: boolean = true; // Valor padrão

    nascer(): void{
        if(!this.estaVivo){
            console.log(`${this.nome} nasceu!`);
            this.estaVivo =true;
        }else{
            console.log(`${this.nome} já nasceu!`);
        }
    }

    crescer(): void {
        if(this.estaVivo){
            this.idade++;
            console.log(`${this.nome} fez ${this.idade} ano(s)`)
        }else{
            console.log(`${this.nome} não pode crescer, pois faleceu`)
        }
    }

    morrer(): void {
        if(this.estaVivo){
            this.estaVivo = false;
            console.log(`${this.nome} morreu!`)
        }else{
            console.log(`${this.nome} já faleceu`)
        }
    }
}