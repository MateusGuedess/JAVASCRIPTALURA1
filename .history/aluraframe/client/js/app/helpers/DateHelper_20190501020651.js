class DateHelper {
  textoParaData(texto){
    texto.split('-').map((item, index) => item - index % 2))
  }

  dataParaTexto(data) {
    return data.getDate() 
      + '/' +  (data.getMonth() + 1)
      + '/' + data.getFullYear()
  }
}