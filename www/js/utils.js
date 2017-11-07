const GetImageByCompany = function (company) {
  switch (company) {
    case 'SEGUROS DEL ESTADO S.A.': 
      return './img/seguresDelEstado.png'
      break
    case 'SEGUROS MUNDIAL': 
      return './img/mundial.png'
      break 
    case 'SEGUROS COMERCIALES BOLIVAR':
      return './img/bolivar.jpeg'
      break
    case 'AIG SEGUROS COLOMBIA S.A':
      return './img/aig.png'
      break
    case 'AIG SEGUROS COLOMBIA S.A.': 
      return './img/aig.png'
      break
    case 'ASEGURADORA SOLIDARIA DE COLOMBIA':
      return './img/aseguradoraSolidaria.png'
    case 'ALLIANZ':
      return  './img/allianz.png'
      break
    case 'EQUIDAD SEGUROS': 
      return './img/equidadSeguros.png'
    case 'LIBERTY SEGUROS S.A.':
      return './img/liberty.png'
      break
    case 'MAPFRE': 
      return './img/mapfre.png'
      break
    case 'MAPFRE COLOMBIA':
      return './img/mapfre.png'
      break
    case 'MAPFRE SEGUROS COLOMBIA':
      return './img/mapfre.png' 
      break
    case 'LA PREVISORA S.A.':
      return './img/previsora.png'
      break
    case 'PREVISORA SEGUROS"':
      return './img/previsora.png' 
      break
    case 'ROYAL & SUN ALLIANCE SEGUROS (COLOMBIA) S.A.S"':
      return './img/rsa.png' 
      break
    case 'AXA COLPATRIA SEGUROS S.A."':
      return './img/axa.png' 
      break
    case 'AXA COLPATRIA SEGUROS S.A."':
      return './img/sura.png' 
      break
    default: 
      return './img/sublogo_1.png'
  }
}
module.exports = GetImageByCompany