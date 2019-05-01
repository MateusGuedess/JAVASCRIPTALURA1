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
    let data = helper.textoParaData(this._inputData.value)
    console.log(data)

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    )

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