class DateHelper {
  dataParaTexto(data) {
    return data.getDate() 
    + '/' +  (data.getMonth() + 1)
    + '/' + data.getFullYear()
  }

  textoParaData(texto){
    return texto.split('-').map((item, index) => item - index % 2)
  }

}