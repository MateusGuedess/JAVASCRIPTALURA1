class Negociacao {
    
  constructor(data, quantidade, valor) {

    this.data = new Date();
    this.quantidade = 1;
    this.valor = 0;
  }

  obterVolume() {
    return this.quantidade * this.valor
  }
}