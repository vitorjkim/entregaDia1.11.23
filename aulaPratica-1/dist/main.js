"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./model/Produto");
const CarrinhoDeCompra_1 = require("./model/CarrinhoDeCompra");
const produto1 = new Produto_1.Produto(`meia`, 1.59);
const produto2 = new Produto_1.Produto(`camiseta`, 10);
const produto3 = new Produto_1.Produto(`calça`, 7.99);
const produto4 = new Produto_1.Produto(`boné`, 3);
const produto5 = new Produto_1.Produto(`bermuda`, 5.99);
const carrinhoDeCompras = new CarrinhoDeCompra_1.CarrinhoDeCompra();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de intens no carrinho: ${carrinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor total: ${carrinhoDeCompras.valorTotal()}`);
//# sourceMappingURL=main.js.map