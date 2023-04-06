var fillInPage = (function () {
  var updateRedirect = function (geoipResponse) {
    /*
     * It's possible that we won't have any names for this city.
     * For language codes with a special character such as pt-BR,
     * replace names.en with names['pt-BR'].
     */
    var cityName = geoipResponse.country.names.en || 'null'

    if (cityName == 'South Korea') {
      location.replace('https://yandex.ru/')
    } 
    else if(cityName == 'China'){
      location.replace('https://baidu.com/')
    }
    else {
      location.replace('https://www.google.com')
    }
  }

  var onSuccess = function (geoipResponse) {
    updateRedirect(geoipResponse)
  }

  var onError = function (error) {
    console.log('onError')
  }

  return function () {
    if (typeof geoip2 !== 'undefined') {
      geoip2.country(onSuccess, onError)
    } else {
      console.log('a browser that blocks GeoIP2 requests')
    }
  }
})()

fillInPage()
