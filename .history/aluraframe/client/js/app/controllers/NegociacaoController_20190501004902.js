class NegociacaoController {

  constructor() {
    
    const $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();

    let data = new Date(...
      this._inputData.value.split('-').map( (item, index) => {
        return index === 1 ? item-1 : item
      }))
    
    console.log(data)

  }
}