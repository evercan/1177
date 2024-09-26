// import { Cachorro } from "./models/animal/cachorro"
// import { Gato } from "./models/animal/gato";
// import { Dono } from "./utils/dono";

import { Dono } from "./utils/dono";

const rex1 = new Animais.Cachorro("rex", "Pastor Alemão", "Alemao");
const lagueta = new Animais.Gato("Maria jose", "Siamês", "Felino")

// rex.emitirSom();
// rex.correrAtrasDoRabinho();
lagueta.emitirSom();

const DonoDoRex = new Dono("Joao", rex1);
const DonoDeGato = new Dono("Yaa",lagueta);

lagueta.afofarPelo();


//DonoDoRex.brincarComAnimal();