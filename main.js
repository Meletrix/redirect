var fillInPage = (function () {
  var updateRedirect = function (geoipResponse) {
    /*
     * It's possible that we won't have any names for this city.
     * For language codes with a special character such as pt-BR,
     * replace names.en with names['pt-BR'].
     */

    const id = window.location.search.split('=')[1]
    console.log(id)
    var cityName = geoipResponse['country']
    console.log(cityName)
    if (cityName == 'South Korea') {
      if (id == '0') {
        location.replace(
          'https://meletrix.com/collections/zoom75-collection-kr'
        )
      } else if (id == '1') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-cyber-yellow-kr'
        )
      } else if (id == '2') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-black-kr'
        )
      } else if (id == '3') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-blush-pink-kr'
        )
      } else if (id == '4') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-cool-grey-kr'
        )
      } else if (id == '5') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-milk-tea-kr'
        )
      } else if (id == '6') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-gt-silver-kr'
        )
      } else if (id == '7') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-lilac-kr'
        )
      } else if (id == '8') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-milky-green-kr'
        )
      } else if (id == '9') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-navy-kr'
        )
      } else if (id == '10') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-plum-kr'
        )
      } else if (id == '11') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-scarlet-red-kr'
        )
      } else if (id == '12') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-sky-blue-kr'
        )
      } else if (id == '13') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-teal-kr'
        )
      } else if (id == '14') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-white-kr'
        )
      } else if (id == '15') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-wild-green-kr'
        )
      } else if (id == '16') {
        location.replace(
          'https://meletrix.com/products/zoom75-ee-black-wired-kr'
        )
      } else if (id == '17') {
        location.replace(
          'https://meletrix.com/products/zoom75-ee-white-wired-kr'
        )
      } else if (id == '18') {
        location.replace(
          'https://meletrix.com/products/zoom75-special-edition-anodized-black'
        )
      } else if (id == '19') {
        location.replace(
          'https://meletrix.com/products/zoom75-special-edition-anodized-lavender'
        )
      } else if (id == '2-') {
        location.replace(
          'https://meletrix.com/products/zoom75-special-edition-anodized-orange'
        )
      } else if (id == '21') {
        location.replace(
          'https://meletrix.com/products/zoom75-special-edition-e-white'
        )
      }
    } else {
      if (id == '0') {
        location.replace('https://meletrix.com/collections/zoom75-collection')
      } else if (id == '1') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-cyber-yellow-1'
        )
      } else if (id == '2') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-black-1'
        )
      } else if (id == '3') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-blush-pink-1'
        )
      } else if (id == '4') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-cool-grey-1'
        )
      } else if (id == '5') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-milk-tea-1'
        )
      } else if (id == '6') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-gt-silver-1'
        )
      } else if (id == '7') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-lilac-1'
        )
      } else if (id == '8') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-milky-green-1'
        )
      } else if (id == '9') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-navy-1'
        )
      } else if (id == '10') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-plum-1'
        )
      } else if (id == '11') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-scarlet-red-1'
        )
      } else if (id == '12') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-sky-blue-1'
        )
      } else if (id == '13') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-teal-1'
        )
      } else if (id == '14') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-white-1'
        )
      } else if (id == '15') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-wild-green-1'
        )
      } else if (id == '16') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-black-wired'
        )
      } else if (id == '17') {
        location.replace(
          'https://meletrix.com/products/zoom75-essential-edition-wired'
        )
      } else if (id == '18') {
        location.replace(
          'https://meletrix.com/products/zoom75-special-edition-anodized-black'
        )
      } else if (id == '19') {
        location.replace(
          'https://meletrix.com/products/zoom75-special-edition-anodized-lavender'
        )
      } else if (id == '2-') {
        location.replace(
          'https://meletrix.com/products/zoom75-special-edition-anodized-orange'
        )
      } else if (id == '21') {
        location.replace(
          'https://meletrix.com/products/zoom75-special-edition-e-white'
        )
      }
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
