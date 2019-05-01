class NegociacaoController {

  constructor() {
    
    const $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();
    
    let negociacao = new Negociacao(
      this._inputData,
      this._inputQuantidade,
      this._inputValor
    )
  }
}