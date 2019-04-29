class Negociacao {
    
  constructor(data, quantidade, valor) {

    const _data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get Volume() {
    return this.quantidade * this.valor
  }

  get Data() {
    return _data
  }

  get Quantidade(){
    return this._quantidade
  }

  get Valor() {
    return this._valor
  }

}