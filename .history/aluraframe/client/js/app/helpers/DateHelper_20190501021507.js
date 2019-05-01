class DateHelper {
  dataParaTexto(data) {
    return data.getDate() 
    + '/' +  (data.getMonth() + 1)
    + '/' + data.getFullYear()
  }

  textoParaData(texto){
    texto.split('-').map((item, index) => console.log(item))
  }

}