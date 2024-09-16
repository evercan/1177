"use strict";
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
let idade = 30; // number (inferido)
let estaAprovado = true; // boolean (inferido)
// Experimente:
nome = 123; // Erro! O TypeScript sabe que 'nome' é uma string
//2. Tipagem Explícita:
let corFavorita = "azul";
corFavorita = "verde"; // OK
corFavorita = 5; // Erro!
let numeros = [1, 2, 3];
numeros.push(4); // OK
numeros.push("cinco"); // Erro!
let usuario = {
    nome: "Ana",
    idade: 25
};
// Experimente:
//usuario.nome = 10; // Erro!
//usuario.idade = "trinta"; // Erro!
//5. Union Types (União de Tipos):
let valor = "um"; // Pode ser string ou number
valor = 1; // OK
valor = true; // Erro!
