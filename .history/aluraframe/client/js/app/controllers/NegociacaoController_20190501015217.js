class NegociacaoController {

  constructor() {
    
    const $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();

    let data = new Date(
      ...this._inputData.value
      .split('-')
      .map((item, index) => item - index % 2))
    
    const negociacao = (data, quantidade, value) => new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    )
    
      // let diaMesAno = negociacao.data.getDate() 
      // + '/' +  negociacao.data.getMonth() 
      // + '/' + negociacao.data.getFullYear()

    console.log(negociacao.data)
    this.limparCampos()
  }

  limparCampos() {
    this._inputQuantidade.value ='';
    this._inputData.value = '';
    this._inputValor.value = '';

    this._inputData.focus()
  }
}