var fillInPage = (function () {
  var updateRedirect = function (geoipResponse) {
    /*
     * It's possible that we won't have any names for this city.
     * For language codes with a special character such as pt-BR,
     * replace names.en with names['pt-BR'].
     */

    console.log(geoipResponse)
    var cityName = geoipResponse['country']
    console.log(cityName)
    if (cityName == 'South Korea') {
      location.replace('https://yandex.ru/')
    } else if (cityName == 'China') {
      location.replace('https://baidu.com/')
    }else if (cityName == 'Germany') {
      location.replace('https://baidu.com/')
    }
  }

  var onSuccess = function (geoipResponse) {
    updateRedirect(geoipResponse)
  }

  var onError = function (error) {
    console.log('onError')
  }

  return function () {
    axios
      .get('http://ip-api.com/json/')
      .then(function (response) {
        onSuccess(response.data)
      })
      .catch(function (response) {
        onError()
      })
  }
})()

fillInPage()
