import { Caminhonete } from "./models/carros/caminhonete";
import { CarroEletrico } from "./models/carros/carroEletrico";
import { CarroEsportivo } from "./models/carros/carroEsportivo";

const tesla = new CarroEletrico("Tesla","Modelo S", 600,450);
const ferrari = new CarroEsportivo("Ferrari","488 GTB", 380,600);

const hilux = new Caminhonete("Toyota", "Hilux", 1000,500);

hilux.ligar();
hilux.acelerar();
hilux.transportarCarga();
hilux.desligar();



// ferrari.ligar();

// ferrari.acelerar();
// ferrari.ativarModo = true;
// ferrari.ativarModoEsporte();
// ferrari.desligar();



// tesla.ligar();
// tesla.acelerar();
// tesla.desligar();
// tesla.carregarBateria();