class NegociacaoController {


  adiciona(event) {
    event.preventDefault();
    
    const $ = document.querySelector;
    let inputData = $('#data');
    let inputQuantidade = document.querySelector('#quantidade');
    let inputValor = document.querySelector('#valor');

    console.log(inputData.value)
    console.log(inputQuantidade.value)
    console.log(inputValor.value)
  }
}