"use strict";
// import { Cachorro } from "./models/animal/cachorro"
// import { Gato } from "./models/animal/gato";
// import { Dono } from "./utils/dono";
Object.defineProperty(exports, "__esModule", { value: true });
const dono_1 = require("./utils/dono");
const rex1 = new Animais.Cachorro("rex", "Pastor Alemão", "Alemao");
const lagueta = new Animais.Gato("Maria jose", "Siamês", "Felino");
// rex.emitirSom();
// rex.correrAtrasDoRabinho();
lagueta.emitirSom();
const DonoDoRex = new dono_1.Dono("Joao", rex1);
const DonoDeGato = new dono_1.Dono("Yaa", lagueta);
lagueta.afofarPelo();
//DonoDoRex.brincarComAnimal();
