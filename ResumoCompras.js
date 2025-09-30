function exibirResumo() {
  var preco = prompt("Digite o preço do produto:");
  var quantidade = prompt("Digite a quantidade:");
  var desconto = prompt("Digite o desconto (%):");

  var total = preco * quantidade;
  var valorFinal = total - (total * desconto / 100);

  alert("Resumo da compra:\n" +
        "Valor total antes do desconto: R$ " + total + "\n" +
        "Valor final com desconto: R$ " + valorFinal);
}

exibirResumo();

