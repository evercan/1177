import { Carros } from "./models/carros";
import { Pessoa } from "./models/pessoa";

let pessoa = new Pessoa("Everton",42);

pessoa.estaVivo = true;
// pessoa.nome = "Everton";
// pessoa.idade = 42

// pessoa.setTelefone = "5499903";

// pessoa.nascer();
// pessoa.crescer();
// pessoa.crescer();
// pessoa.crescer();
// pessoa.morrer();


const meuCarro = new Carros("GM");

meuCarro.modelo = "Corsa"
meuCarro.ligar();