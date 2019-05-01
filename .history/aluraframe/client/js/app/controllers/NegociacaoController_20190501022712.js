class NegociacaoController {

  constructor() {
    
    const $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();

    let helper = new DateHelper()

    let data = helper.textoParaData(this._inputData)

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    )
     
      let diaMesAno = negociacao.Data.getDate() 
      + '/' +  (negociacao.Data.getMonth() + 1)
      + '/' + negociacao.Data.getFullYear()

    console.log(helper.dataParaTexto(negociacao.Data))
    this.limparCampos()
  }

  limparCampos() {
    this._inputQuantidade.value ='';
    this._inputData.value = '';
    this._inputValor.value = '';

    this._inputData.focus()
  }
}