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

    let negociacao = new Negociacao(
      helper.textoParaData(this._inputData.value),
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