import { Animal } from "./models/animal";
import { Carros } from "./models/carros";
import { Pessoa } from "./models/pessoa";

const meuCarro = new Carros();

 meuCarro.marca = "GM"
 meuCarro.modelo = "Corsa"

//  meuCarro.ligar();
//  meuCarro.acelerar();
//  meuCarro.desligar();


 const meuAnimal = new Animal();
 meuAnimal.especie = "Felinos"
 meuAnimal.nome = "Gato"
 meuAnimal.som = "Mi au"

 //meuAnimal.emitirSom();

 const meuCachorro = new Animal();
 meuCachorro.especie = "ViraLata"
meuCachorro.nome = "Cachorro"
meuCachorro.som = "Au au"

//meuCachorro.emitirSom();

const pessoa = new Pessoa();

pessoa.nome = "Paulo";
//pessoa.estaVivo = false;
//pessoa.idade = 45;
pessoa.nascer();
pessoa.crescer();
pessoa.crescer();
pessoa.crescer();
pessoa.crescer();
pessoa.morrer();