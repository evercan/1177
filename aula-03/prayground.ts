
// A plataforma Node.js e Navegadores são capazes de executar códigos 
// Typescript diretamente?


// Não, nem Node.js nem navegadores conseguem executar código TypeScript 
// diretamente. O TypeScript precisa ser transpilado para JavaScript antes
// de ser executado nesses ambientes.
// Aqui está o porquê:
// Node.js e Navegadores são otimizados para interpretar e executar 
// JavaScript, que é uma linguagem interpretada dinamicamente.
// TypeScript é um superconjunto de JavaScript que adiciona tipagem 
// estática, ou seja, você define os tipos de dados das variáveis, 
// parâmetros e retornos de funções. Essa tipagem facilita a detecção de erros durante o desenvolvimento, mas os navegadores e o Node.js não entendem essas informações adicionais.
// Então, como usar TypeScript com Node.js e navegadores?
// - Transpilação: Você precisa usar um transpilador como o tsc 
// (compilador TypeScript) para converter seu código TypeScript (.ts) 
// em código JavaScript (.js) compatível.
// - Configuração: Um arquivo tsconfig.json é usado para configurar o
//  processo de transpilação, como a versão de destino do 
//  JavaScript (ES5, ES6, etc.) e o local dos arquivos de saída.
// - Execução: Após a transpilação, o código JavaScript gerado pode 
// ser executado no Node.js ou em um navegador como qualquer outro 
// código JavaScript.
// - Em resumo: Apesar de não executarem TypeScript diretamente, 
// Node.js e navegadores podem executar a versão JavaScript
//  transpilada do seu código, permitindo que você aproveite 
//  os benefícios da tipagem estática e outras funcionalidades 
//  do TypeScript durante o desenvolvimento.


// ** Tipos básicos em JavaScript:**
// Em JavaScript, os tipos são dinâmicos, ou seja, 
// uma mesma variável pode assumir diferentes tipos durante a 
// execução do código.
// Number: Representa números inteiros e decimais.
// Exemplo: let idade = 25; let preco = 19.99;
// String: Representa textos.
// Exemplo: let nome = "Maria"; let frase = 'Olá, mundo!';
// Boolean: Representa valores verdadeiro ou falso.
// Exemplo: let ligado = true; let desligado = false;
// Null: Representa a ausência intencional de um valor.
// Exemplo: let valorNulo = null;
// Undefined: Representa uma variável que foi declarada, mas não teve um valor atribuído.
// Exemplo: let valorIndefinido;
// Object: Representa uma coleção de propriedades e métodos.
// Exemplo: let pessoa = { nome: "João", idade: 30 };
// Symbol (ES6): Cria um valor único e imutável.
// Exemplo: const id = Symbol();



// ** Tipos básicos em TypeScript: **
// TypeScript adiciona a tipagem estática aos tipos básicos do JavaScript, 
// permitindo uma declaração explícita:
// Number: let idade: number = 25;
// String: let nome: string = "Maria";
// Boolean: let ligado: boolean = true;
// Null: let valorNulo: null = null;
// Undefined: let valorIndefinido: undefined = undefined;
// Object: let pessoa: object = { nome: "João", idade: 30 };
// Symbol: const id: symbol = Symbol();


// {
//     "compilerOptions": {
//       "target": "es6",       // Versão do JavaScript alvo (ES6 é um bom padrão)
//       "module": "commonjs",   // Sistema de módulos (CommonJS para Node.js, "ES Modules" para navegadores modernos)
//       "outDir": "./dist",     // Pasta de saída para arquivos .js compilados
//       "rootDir": "./src",      // Pasta raiz do código TypeScript (opcional)
//       "strict": true,         // Habilita verificações mais rigorosas (recomendado)
//       "esModuleInterop": true  // Interoperabilidade suave entre módulos (recomendado)
//     },
//     "include": [              // Arquivos e pastas a serem incluídos na compilação
//       "./src/**/*.ts"       // Inclui todos os arquivos .ts dentro da pasta src
//     ],
//     "exclude": [              // Arquivos e pastas a serem excluídos da compilação (opcional)
//       "./node_modules"      // Exclui a pasta node_modules
//     ]
//   }


//1.  Tipos Básicos e Inferência - Tipagem Implicita:
let nome = "Maria"; // string (inferido)
let idade = 30;      // number (inferido)
let estaAprovado = true;  // boolean (inferido)

// Experimente:
nome = 123; // Erro! O TypeScript sabe que 'nome' é uma string


//2. Tipagem Explícita:
let corFavorita: string = "azul";
corFavorita = "verde"; // OK
corFavorita = 5;      // Erro!

let numeros: number[] = [1, 2, 3];
numeros.push(4); // OK
numeros.push("cinco"); // Erro!


// 3. Funções com Tipos:
// function saudacao(pessoa: string): string {
//   return "Olá, " + pessoa + "!";
// }

// console.log(saudacao("João")); // OK
// console.log(saudacao(123));   // Erro!


//4. Interfaces para Objetos:
interface Pessoa {
  nome: string;
  idade: number;
}

let usuario: Pessoa = {
  nome: "Ana",
  idade: 25
};

// Experimente:
//usuario.nome = 10; // Erro!
//usuario.idade = "trinta"; // Erro!


//5. Union Types (União de Tipos):
let valor: string | number = "um"; // Pode ser string ou number
valor = 1; // OK
valor = true; // Erro!