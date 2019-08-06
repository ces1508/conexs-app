const GetImageByCompany = function (company) {
  company = company.trim()
  switch (company) {
    case 'SEGUROS DEL ESTADO S.A.':
      return './img/seguresDelEstado.png'
    case 'SEGUROS DEL ESTADO S.A':
      return './img/seguresDelEstado.png'
    case 'SEGUROS MUNDIAL':
      return './img/mundial.png'
    case 'SEGUROS COMERCIALES BOLIVAR':
      return './img/bolivar.png'
    case 'AIG SEGUROS COLOMBIA S.A':
      return './img/logo-sbs.jpg'
    case 'AIG SEGUROS COLOMBIA S.A.':
      return './img/logo-sbs.jpg'
    case 'ASEGURADORA SOLIDARIA DE COLOMBIA':
      return './img/aseguradoraSolidaria.png'
    case 'ALLIANZ':
      return './img/allianz.png'
    case 'EQUIDAD SEGUROS':
      return './img/equidadSeguros.png'
    case 'LIBERTY SEGUROS S.A.':
      return './img/liberty.png'
    case 'MAPFRE':
      return './img/mapfre.png'
    case 'MAPFRE COLOMBIA':
      return './img/mapfre.png'
    case 'MAPFRE SEGUROS COLOMBIA':
      return './img/mapfre.png'
    case 'LA PREVISORA S.A.':
      return './img/previsora.png'
    case 'PREVISORA SEGUROS':
      return './img/previsora.png'
    case 'ROYAL & SUN ALLIANCE SEGUROS (COLOMBIA) S.A.S':
      return './img/rsa.png'
    case 'AXA COLPATRIA SEGUROS S.A.':
      return './img/axa.png'
    case 'SURA':
      return './img/sura.png'
    case 'CONFIANZA':
      return './img/confianza.png'
    case 'SBS SEGUROS COLOMBIA S.A.':
      return './img/logo-sbs.jpg'
    default:
      return './img/sublogo_1.png'
  }
}
