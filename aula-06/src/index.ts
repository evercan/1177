import { Caminhonete } from "./models/carros/caminhonete";
import { CarroEletrico } from "./models/carros/carroEletrico";
import { CarroEsportivo } from "./models/carros/carroEsportivo";

import { IPropriedadesVeiculo } from "./types/IPropriedadesVeiculo";

import { Carros } from "./models/carros/carros";
import { Logger } from "./utils/logger";
import { LogLevel } from "./utils/logger";

const propriedadesCarro: IPropriedadesVeiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    potenciaMotor: 150
}

const propriedadesCarroEsportivo: IPropriedadesVeiculo = {
    marca: "Ferrari",
    modelo: "488 GTB",
    potenciaMotor: 380
}

const hilux = new Caminhonete(propriedadesCarro,1000);

const ferrari = new CarroEsportivo(propriedadesCarroEsportivo,1000);

Logger.setLogLevel(LogLevel.WARN);
ferrari.ligar();
ferrari.acelerar();
ferrari.ativarModo = true;
ferrari.ativarModoEsporte();
ferrari.desligar();
console.log('Total de Carros= '+Carros.obterTotalCarrosCriados());

console.log(hilux);

// const tesla = new CarroEletrico("Tesla","Modelo S", 600,450);
// const ferrari = new CarroEsportivo("Ferrari","488 GTB", 380,600);

// const hilux = new Caminhonete("Toyota", "Hilux", 1000,500);

// hilux.ligar();
// hilux.acelerar();
// hilux.transportarCarga();
// hilux.desligar();



// ferrari.ligar();

// ferrari.acelerar();
// ferrari.ativarModo = true;
// ferrari.ativarModoEsporte();
// ferrari.desligar();



// tesla.ligar();
// tesla.acelerar();
// tesla.desligar();
// tesla.carregarBateria();