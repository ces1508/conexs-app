$('document').find('.notification').css('display', 'none')
angular.module('conexs')
  .controller('AllNotificationsCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.init = function () {
      $scope.notifications = {}
      $scope.contenido = true
      var user = window.localStorage['user'] || 0
      var req = {
        method: 'GET',
        url: 'http://api.conexseguros.com/list-notifications.php?user=' + user
      }
      $http(req).then(function (response) {
        $scope.notifications = response.data
        if (response.data.error) {
          $scope.contenido = false
        }
      }, function () {
        alert('estamos presentando problemas para cargar las notificaciones, por favor intenta mas tarde')
      })
    }
    $scope.init()
    $(document).ready(function () {
      var noti = document.getElementById('noti')
      if (noti) {
        $('.notfication').css({display: 'none'})
        noti.remove()
      }
    })
  }])
