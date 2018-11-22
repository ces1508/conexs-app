angular.module('conexs')
  .controller('LoginCtrl', ['$scope', '$http', '$state', '$document', '$cordovaToast', function ($scope, $http, $state, $document, $cordovaToast) {
  $scope.showModal = function () {
		var modal = document.getElementById('modal')
		modal.classList.add('modal--show')
	}
	var reg = new RegExp('^[a-zA-Z]{3}[0-9]{2}[a-zA-Z0-9]?$')

	$scope.hiddeModal = function () {
		var modal = document.getElementById('modal')
		modal.classList.remove('modal--show')
	}

	$scope.auth = 'cedula'
	$scope.user = {}
	$scope.login = function () {
		var inputData = String($scope.user.cedula).split(' ')
		if (inputData.length < 2) {
			$cordovaToast.showShortCenter('debes ingresar tu codigo de seguridad.')
			return null
		}
		if (inputData[0].toLocaleLowerCase() !== inputData[1].toLocaleLowerCase()) {
			return $cordovaToast.showShortCenter('Por favor, verifique sus datos.')
		}
		var txt = inputData[0]
		if (txt.match(reg)) {
			$scope.auth = 'placa'
		}
		var req = {
			method: 'POST',
			url: 'http://api.conexseguros.com/loginapi.php',
			data: {
				cedula: inputData[0],
				placa: inputData[0]
			},
			params: {
				auth: $scope.auth
			}
		}
		$http(req).then(function (response) {
			if(response.data.error) {
				 return $cordovaToast.showShortCenter('usuario no encontrado, por favor verifique sus datos')
			}
			window.localStorage['user'] = response.data.user ? response.data.user : inputData[0]
			$state.go('polizas', {}, { reload: true })
		}, function (error) {
			console.log('error ', error.message)
			$cordovaToast.showShortBottom('lo sentimos, tenemos problemas con nuestros servidores');
		})
	}
}])
