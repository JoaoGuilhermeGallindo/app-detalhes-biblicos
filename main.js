function Coletar(){
    let  Nome = document.querySelector('.input-version').value
    let Autor = document.querySelector('.input-abrev').value
    let Capitulo = document.querySelector('.input-capitulo').value
    let Versiculo = document.querySelector('.input-versiculo').value
    console.log(Nome, Autor, Capitulo, Versiculo)
    Dados(Nome, Autor, Capitulo, Versiculo)
}

async function Dados(Nome, Autor, Capitulo, Versiculo) {
let dados = await
fetch(`https://www.abibliadigital.com.br/api/verses/${Nome}/${Autor}/${Capitulo}/${Versiculo}`).then(response => response.json())
console.log(dados)
ExibirDados(dados)
}

function ExibirDados(dados){
    document.querySelector('.Nome').innerHTML =  "Nome do Livro: " + dados.book.name
    document.querySelector('.Autor').innerHTML = "Autor: " + dados.book.author
    document.querySelector('.Capitulo').innerHTML = "Capítulo: " + dados.chapter
    document.querySelector('.Versiculo').innerHTML = "Versículo: " + dados.text
    document.querySelector('.Resultados').style.display = 'block';
}