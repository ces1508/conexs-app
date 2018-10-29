angular.module('conexs')
.controller('NotificationCtrl', ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state) {
    $scope.notification_id = $stateParams.notification_id
    var req = {
      method: 'GET',
      url: 'http://api.conexseguros.com/getNotification.php?id=' + $scope.notification_id
    }
    $http(req).then(function (response) {
      $scope.notification = response.data[0]
    },
    function (error) {
      console.log(error)
    })
    var notificacion = $('#noti')
    notificacion.remove()
    $scope.goLink = function (url) {
      let options = 'location=yes, hideurlbar=yes, toolbarcolor=#0000FF'
      // $state.go('notifications', { url })
      cordova.InAppBrowser.open(url, '_system', options)
    }
  }]
  )
