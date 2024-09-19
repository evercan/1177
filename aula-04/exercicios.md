Exercício 1: Conta Bancária \
Classe: ContaBancaria \
Atributos: \
_saldo (privado): número, inicializado com 0. \
_numeroConta (privado): string. \
Métodos: \
Construtor: Recebe o número da conta como argumento e inicializa o atributo _numeroConta. \
depositar(valor: number): void: Adiciona o valor ao saldo. \
sacar(valor: number): void: Verifica se há saldo suficiente antes de realizar o saque. \  Se o saldo for insuficiente, exiba uma mensagem. \
consultarSaldo(): number: Retorna o saldo atual. \
obterNumeroConta(): string: Retorna o número da conta. \

\
Exercício 2: Produto \
Classe: Produto \
Atributos: \
_nome (privado): string. \
_preco (privado): número. \
_quantidade (privado): número. \
Métodos: \
Construtor: Recebe nome, preço e quantidade inicial como argumentos. \
reporEstoque(quantidade: number): void: Adiciona a quantidade ao estoque atual. \
baixarEstoque(quantidade: number): void: Verifica se há quantidade suficiente em estoque antes de realizar a baixa. Exiba uma mensagem caso contrário. \
calcularValorTotal(): number: Retorna o valor total do produto em estoque (preço * quantidade). \
exibirResumo(): void: Exibe no console um resumo com o nome, preço, quantidade e valor total do produto. \
 \


\ 
Exercício 3: Música \
Classe: Musica \
Atributos: \
_titulo (privado): string. \
_artista (privado): string. \
_duracao (privado): número (em segundos). \
Métodos: \
Construtor: Recebe o título, artista e duração da música. \
reproduzir(): void: Exibe a mensagem: "Reproduzindo [título da música] - [nome do artista]." \
pausar(): void: Exibe a mensagem: "[título da música] pausada." \
obterDuracaoEmMinutos(): string: Retorna a duração da música formatada em minutos e segundos (ex: "3:45"). \
\
