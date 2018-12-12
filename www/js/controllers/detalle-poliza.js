angular.module('conexs')
.controller(
  'DetalleCtrl',
    [
      '$scope',
      '$state',
      '$stateParams',
      '$http',
      '$cordovaClipboard',
      '$cordovaToast',
      function ($scope, $state,$stateParams, $http, $cordovaClipboard, $cordovaToast) {
        if (!window.localStorage['user']) {
          $state.go('login')
        }
        $scope.informacion = {};
        $scope.informacion.contenido = false
        $scope.numSiniestros = 'cargando';
        var req = {
          method:'get',
          url:'http://api.conexseguros.com/api-poliza.php?poliza='+$stateParams.poliza_id,
        }

        $http(req).then(function (response) {
          $scope.informacion = response.data[0]
          $scope.informacion.image = GetImageByCompany($scope.informacion.aseguradora)
          $scope.informacion.contenido = true
          getNumber($scope.informacion.aseguradora)
        }, function (error) {
          window.alert('lo sentimos, se ha presentado un problema obteniendo la infamación')
        })
        $scope.getSiniestros = function () {
          var req = {
            method:'GET',
            url:'http://api.conexseguros.com/count_siniestros.php?poliza='+$stateParams.poliza_id
          };
          $http(req).then(function(response){
            $scope.numSiniestros = response.data[0]['count(*)']
          });
        };
        function getNumber (aseguradora) {
          switch (aseguradora) {
            case 'AIG SEGUROS COLOMBIA S.A':
              $scope.informacion.phone = '%23360';
              break;
            case 'AIG SEGUROS COLOMBIA S.A.':
              $scope.informacion.phone = '%23360';
              break;
            case 'SBS SEGUROS COLOMBIA S.A.':
              $scope.informacion.phone = '%23360';
              break;
            case 'EQUIDAD SEGUROS':
              $scope.informacion.phone = '%23324';
              break;
            case 'EQUIDAD SEGUROS ':
              $scope.informacion.phone = '%23324';
              break
            case 'SEGUROS DEL ESTADO S.A.':
              $scope.informacion.phone = '%23388';
              break;
            case 'ALLIANZ':
              $scope.informacion.phone ='%23265'
              break;
            case 'SEGUROS MUNDIAL':
              $scope.informacion.phone = '018000515522'
              break;
            case 'PREVISORA SEGUROS':
              $scope.informacion.phone = '%23345';
              break
            case 'LA PREVISORA S.A.':
              $scope.informacion.phone = '%23345';
              break
            case 'ASEGURADORA SOLIDARIA DE COLOMBIA':
              $scope.informacion.phone = '%23789';
              break;
            case 'MAPFRE SEGUROS COLOMBIA':
              $scope.informacion.phone = '%23624';
              break;
            case 'MAPFRE COLOMBIA':
              $scope.informacion.phone = '%23624';
              break;
            case 'LIBERTY SEGUROS S.A.':
              $scope.informacion.phone = '%23224';
              break;
            case 'ASEGURADORA SOLIDARIA DE SEGUROS':
              $scope.informacion.phone = '%23789';
              break;
            case 'AXA COLPATRIA SEGUROS S.A.':
              $scope.informacion.phone = '%23247'
              break;
            case 'COLPATRIA SEGUROS':
              $scope.informacion.phone = '%23247'
              break;
            case 'ROYAL & SUN ALLIANCE SEGUROS (COLOMBIA) S.A.S.':
              $scope.informacion.phone = false
              break;
            case 'CONFIANZA':
              $scope.informacion.phone = '0316444690';
              break
            case 'QBE SEGUROS':
              $scope.informacion.phone = '%23723'
              break
            case 'SURA':
              $scope.informacion.phone = '%23888'
              break
            default:
          };
        }
        $scope.getSiniestros()
        function toast (text) {
          $cordovaToast.showLongBottom(text).then(function (success) {})
        }

        $scope.copy = function (number) {
          $cordovaClipboard.copy(number)
            .then(function () {
              toast(`copiado ${number}`)
            }, function (e) {
              toast('ocurrio un error')
            })
        }
        $scope.companiesInformation = function () {
          let options = 'location=yes, hideurlbar=yes, toolbarcolor=#0000FF'
          // $state.go('notifications', { url })
          cordova.InAppBrowser.open('http://api.conexseguros.com/companias.html', '_system', options)
        }
        $scope.sendMail = function () {
          // $scope.copy($scope.informacion.phone);
          var call = 'tel:' + $scope.informacion.phone
          var req = {
            url: 'http://api.conexseguros.com/send-mail.php',
            method: 'POST',
            data: {
              username: $scope.informacion.titular,
              cedula: $scope.informacion.cedula_nit,
              poliza: $scope.informacion.poliza
            }
          }

          $http(req).then(function (response) {
            }, function (error) {
          })
          document.location.href = call
        }

        $scope.goPolizas = function () {
          $state.go('listSiniestros', { poliza_id: $stateParams.poliza_id })
        }

}]);
