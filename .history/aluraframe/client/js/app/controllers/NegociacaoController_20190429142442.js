class NegociacaoController {

  constructor() {
    
    const $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();
    

    console.log(this._inputData.value)
    console.log(this._inputQuantidade.value)
    console.log(this._inputValor.value)
  }
}