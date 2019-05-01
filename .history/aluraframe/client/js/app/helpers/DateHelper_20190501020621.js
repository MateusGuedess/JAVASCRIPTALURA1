class DateHelper {
  textoParaData(texto){
    texto.split('-').map((item, index) => item - index % 2))
  }

  dataParaTexto(data) {
    data.Data.getDate() 
      + '/' +  (data.Data.getMonth() + 1)
      + '/' + data.Data.getFullYear()
  }
}