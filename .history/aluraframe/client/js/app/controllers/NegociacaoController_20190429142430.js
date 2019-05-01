class NegociacaoController {

  constructor() {
    
    const $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();
    

    console.log(this.inputData.value)
    console.log(this.inputQuantidade.value)
    console.log(this.inputValor.value)
  }
}