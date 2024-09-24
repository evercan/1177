Carrinho de Compras \
Contexto: Implemente um carrinho de compras simples. \
Requisitos: \
Classe Produto: \
Propriedades: nome (string), preco (number). \
Classe ItemCarrinho: \
Propriedades: produto (Produto), quantidade (number). \
Método: calcularSubtotal(): Retorna o subtotal do item (preço do produto * quantidade). \
Classe CarrinhoCompras: \
Propriedade: itens (um array de ItemCarrinho). \
Métodos: \
adicionarItem(produto: Produto, quantidade: number): Adiciona um item ao carrinho. \
removerItem(produto: Produto): Remove um item do carrinho. \
calcularTotal(): Calcula o valor total do carrinho, somando os subtotais de cada item. \
Crie instâncias de produtos, adicione-as ao carrinho e teste os métodos.