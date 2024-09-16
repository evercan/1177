//Inicialize um projeto Node.js: 
//npm init -y.

//Instale o TypeScript como dependência de desenvolvimento: 
//npm install --save-dev typescript.

// Compile o código usando o tsc:
// No terminal, execute: 
// npx tsc script.ts
// Um arquivo script.js será gerado com o código JavaScript equivalente.

//Execute o arquivo JavaScript compilado com o Node.js:
//No terminal, execute: node script.js
//Você verá a mensagem "Olá, TypeScript!" no terminal.

// Instale o ts-node:
// No terminal, execute: npm install --save-dev ts-node
// Crie um arquivo chamado index.ts.

// Execute o arquivo TypeScript diretamente com o ts-node:
// npx ts-node index.ts

// Informações básicas para o tsconfig.json:

// target: Define a versão do JavaScript para a qual o TypeScript deve ser compilado.
// "es5": Compatível com a maioria dos navegadores antigos.
// "es6" (ou superior): Mais recursos modernos, mas pode exigir polyfills para navegadores antigos.
// module: Determina como os módulos serão tratados.
// "commonjs": Para Node.js.
// "esnext": Para módulos ES nativos em navegadores modernos.
// outDir: Especifica a pasta onde os arquivos JavaScript compilados serão salvos.
// Organiza seu projeto e separa o código TypeScript do JavaScript compilado.
// rootDir: Define a raiz do seu código TypeScript. Útil para projetos maiores.
// strict: Ativa o modo estrito do TypeScript, o que ajuda a evitar erros comuns.
// Altamente recomendado para um código mais robusto.
// esModuleInterop: Permite uma interoperabilidade mais suave ao usar módulos CommonJS e ES Modules juntos.
// include: Define quais arquivos e pastas devem ser incluídos na compilação.
// exclude: Especifica arquivos e pastas que devem ser ignorados pelo compilador.

//npx tsc tipos.ts