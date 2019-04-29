class NegociacaoController {


  adiciona(event) {
    event.preventDefault();
    
    let inputData = document.querySelector('#data');
    let inputQuantidade = document.querySelector('#quantidade');
    let inputValor = document.querySelector('#valor');

    console.log(inputData.value)
  }
}