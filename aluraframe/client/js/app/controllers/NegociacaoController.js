class NegociacaoController {

  constructor() {
    
    const $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes(model => {
      this._negociacoesView.update(model)
    })
    
    this._negociacoesView = new NegociacoesView($("#negociacoesView"))
    this._negociacoesView.update(this._listaNegociacoes)

    this._mensagem = new Mensagem()
    this._mensagemView = new MensagemView($("#mensagemView"))
    this._mensagemView.update(this._mensagem)


  }

  adiciona(event) {
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao())

    this._mensagem.texto = 'Negociação adicionada com sucesso'
    this._mensagemView.update(this._mensagem)

    this.limparCampos()
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas com sucesso'
    this._mensagemView.update(this._mensagem)
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    )
  }

  limparCampos() {
    this._inputQuantidade.value ='';
    this._inputData.value = '';
    this._inputValor.value = '';

    this._inputData.focus()
  }
}