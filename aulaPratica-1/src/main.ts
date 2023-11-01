import { Produto } from "./model/Produto";
import { CarrinhoDeCompra } from "./model/CarrinhoDeCompra";

const produto1 = new Produto(`meia`, 1.59);
const produto2 = new Produto(`camiseta`, 10);
const produto3 = new Produto(`calça`, 7.99);
const produto4 = new Produto(`boné`, 3);
const produto5 = new Produto(`bermuda`, 5.99);

const carrinhoDeCompras = new CarrinhoDeCompra();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de intens no carrinho: ${carrinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor total: ${carrinhoDeCompras.valorTotal()}`);
