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
      this._inputData.value.split('-').map( (item, index) => index === 1 ? item-1 : item)
    )
    
    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    )
    
      let diaMesAno = negociacao.data.getDay() 
      + '/' +  negociacao.data.getMonth() 
      + '/' + negociacao.data.getFullYear()

    this.limparCampos()
    console.log(diaMesAno)
  }

  limparCampos() {
    this._inputQuantidade.value ='';
    this._inputData.value = '';
    this._inputValor.value = '';

    this._inputData.focus()
  }
}