class DateHelper {
  textoParaData(texto){
    texto.split('-').map((item, index) => item - index % 2))
  }

  dataParaTexto(data) {
    Data.getDate() 
      + '/' +  (Data.getMonth() + 1)
      + '/' + Data.getFullYear()
  }
}