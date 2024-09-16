export class Carros{
    public marca: string = "";
    public modelo: string = "";

    ligar(): void {
        console.log("O carro esta ligado");
    }

    desligar(): void {
        console.log("O carro esta desligado");
    }

    acelerar(): void {
        console.log("O carro esta acelerando");
    }
}

// const meuCarro = new Carros();

// meuCarro.marca = "GM"
// meuCarro.modelo = "Corsa"

// meuCarro.ligar();
// meuCarro.acelerar();
// meuCarro.desligar();


