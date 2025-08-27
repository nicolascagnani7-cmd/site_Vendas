// Comunicação com o Banco de Dados - NO-SQL
fetch("dados.json").then(resposta => resposta.json()).then(banco => {
    console.log(banco);

    // frontend
    document.getElementById('imagem').innerHTML = banco[3].imagemProdutos.imag001;
    document.getElementById('produto').innerHTML = banco[0].produtos.prod123;
    document.getElementById('preco').innerHTML = "R$" + banco[2].preco.preco123;
    document.getElementById('vendedor').innerHTML = banco[1].vendendor.vend456;
    document.getElementById('cliente').innerHTML = banco[4].cliente.cli789;

    document.getElementById('imagem2').innerHTML = banco[3].imagemProdutos.imag002;
    document.getElementById('produto2').innerHTML = banco[0].produtos.prod124;
    document.getElementById('preco2').innerHTML = "R$" + banco[2].preco.preco124;
    document.getElementById('vendedor2').innerHTML = banco[1].vendendor.vend457;
    document.getElementById('cliente2').innerHTML = banco[4].cliente.cli790;

    document.getElementById('imagem3').innerHTML = banco[3].imagemProdutos.imag003;
    document.getElementById('produto3').innerHTML = banco[0].produtos.prod125;
    document.getElementById('preco3').innerHTML = "R$" + banco[2].preco.preco125;
    document.getElementById('vendedor3').innerHTML = banco[1].vendendor.vend458;
    document.getElementById('cliente3').innerHTML = banco[4].cliente.cli791;

    document.getElementById('imagem4').innerHTML = banco[3].imagemProdutos.imag004;
    document.getElementById('produto4').innerHTML = banco[0].produtos.prod126;
    document.getElementById('preco4').innerHTML = "R$" + banco[2].preco.preco126;
    document.getElementById('vendedor4').innerHTML = banco[1].vendendor.vend459;
    document.getElementById('cliente4').innerHTML = banco[4].cliente.cli792;

    document.getElementById('imagem5').innerHTML = banco[3].imagemProdutos.imag005;
    document.getElementById('produto5').innerHTML = banco[0].produtos.prod127;
    document.getElementById('preco5').innerHTML = "R$" + banco[2].preco.preco127;
    document.getElementById('vendedor5').innerHTML = banco[1].vendendor.vend460;
    document.getElementById('cliente5').innerHTML = banco[4].cliente.cli793;
});