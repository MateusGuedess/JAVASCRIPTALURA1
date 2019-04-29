class Negociacao {
    
  constructor(data, quantidade, valor) {

    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this)
  }

  get Volume() {
    return this.quantidade * this.valor
  }

  get Data() {
    return new Date(data.getTime())
  }

  get Quantidade(){
    return this._quantidade
  }

  get Valor() {
    return this._valor
  }

}