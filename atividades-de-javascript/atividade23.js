let carrinho = [
    {
    produto:'cereal',
    valor: 10
    },
    {
    produto:'arroz',
    valor: 60
    },
    {
    produto:'televisão',
    valor: 200
    },
    {
    produto:'sabão em pó',
    valor: 45
    }
];

let produtosAcimaDe50 = carrinho.filter(function(produto) {
    return produto.valor > 50;
});

let valortotal = carrinho.reduce(function(total,produto){
    return total + produto.valor;
}, 0);

console.log(carrinho);
console.log(produtosAcimaDe50);

console.log("Valor total do carrinho: R$ " + valortotal);