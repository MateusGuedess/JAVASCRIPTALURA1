class NegociacaoController {

  constructor() {
    
    const $ = document.querySelector.bind(document);
    this.inputData = $('#data');
    this.inputQuantidade = $('#quantidade');
    this.inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();
    

    console.log(inputData.value)
    console.log(inputQuantidade.value)
    console.log(inputValor.value)
  }
}