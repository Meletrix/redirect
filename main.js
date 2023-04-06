var fillInPage = (function () {
  var updateRedirect = function (geoipResponse) {
    /*
     * It's possible that we won't have any names for this city.
     * For language codes with a special character such as pt-BR,
     * replace names.en with names['pt-BR'].
     */

    console.log(window.location.search)
    var cityName = geoipResponse['country']
    console.log(cityName)
    if (cityName == 'South Korea') {
      location.replace('https://meletrix.com/products/zoom75-essential-edition-cyber-yellow-kr')
    } else if (cityName == 'China') {
      location.replace('https://meletrix.cn/products/zoom75-essential-edition-A/')
    }
    /* else {
      location.replace('https://meletrix.com/collections/zoom75-collection')
    } */
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
