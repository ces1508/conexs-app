angular.module('conexs')
  .factory('pushNotifications', ['$http', '$state', '$cordovaDevice', '$cordovaToast', function ($http, $state, $cordovaDevice, $cordovaToast) {
    return {
      sendDeviceInfo: function (user = 0) {
        if (window.plugins) {
          var data = {}
          data.user = user
          data.regId = window.localStorage['regid']
          data.platform = $cordovaDevice.getPlatform().toLowerCase()
          data.uuid = $cordovaDevice.getUUID()
          data.name = `${data.uuid} [${data.platform} - ${$cordovaDevice.getVersion()}]`
          var req = {
            method: 'POST',
            url: 'http://api.conexseguros.com/saveDeviceInfo.php',
            data
          }
          console.log('make request', data)
          $http(req).then(function (response) {
            if (response.data.ok) {
              console.log('all ok')
            }
          }, function (error) {
            $cordovaToast.showShortBottom(`oocurrió un error: ${error}`)
            // alert('error : '+ error);
          })
        }
      }
    }
  }])
