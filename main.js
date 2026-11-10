const produtos = [
    {
      nome: "Alface",
      categoria: "Legume",
      quantidade: "unidade",
      preco: 3.50
    },
    {
        nome: "tomate",
      categoria: "Fruta",
      quantidade: "1kg",
      preco: 2.30
    },
    {
        nome: "Maça",
      categoria: "Fruta",
      quantidade: "1kg",
      preco: 6.50
    },
    {
        nome: "Abacate",
      categoria: "Fruta",
      quantidade: "1kg",
      preco: 5.00
    },
    {
        nome: "Abacaxi",
      categoria: "Fruta",
      quantidade: "unidade",
      preco: 5.00
    },
    {
        nome: "Melancia",
      categoria: "Fruta",
      quantidade: "1kg",
      preco: 1.88
    },
    {
        nome: "Banana",
      categoria: "Fruta",
      quantidade: "1kg",
      preco: 5.00
    },
    {
        nome: "Cenoura",
      categoria: "legume",
      quantidade: "1kg",
      preco: 2.50
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }