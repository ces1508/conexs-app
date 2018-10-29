angular.module('conexs')
  .controller('PolizasCtrl', ['$scope', '$state', '$http', 'pushNotifications', function ($scope, $state, $http, pushNotifications) {
    $scope.showOnlyWthiSiniestros = false
    $scope.init = function () {
      if (window.localStorage.getItem('user')) {
        pushNotifications.sendDeviceInfo(window.localStorage.getItem('user'))
        $scope.list = {}
        var params = {}
        if ($scope.showOnlyWthiSiniestros) {
          params = {
            siniestros: true
          }
        }
        var req = {
          url: 'http://api.conexseguros.com/list-polizas.php',
          method: 'POST',
          data: {
            user: window.localStorage.getItem('user')
          },
          params
        }
        $http(req).then(function (response) {
          var list = response.data
          if (list.length > 0) {
            $scope.order(list)
          } else {
            $scope.soats = []
            $scope.polizas = []
          }
        }, function (error) {
          console.log('error', error)
        })
      } else {
        $state.go('login')
      }
    }
    $scope.order = function (list) {
      $scope.soats = list.filter(function (item) {
        if (item.formato === 'SOAT') return item
      })
      $scope.polizas = list.filter(function (item) {
        if (item.formato !== 'SOAT') return item
      })
    }

    $scope.getImage = function (company) {
      return GetImageByCompany(company)
    }
    $scope.changeInput = function () {
      $scope.showOnlyWthiSiniestros = !$scope.showOnlyWthiSiniestros
      $scope.init()
    }
    $scope.init();

}]);
