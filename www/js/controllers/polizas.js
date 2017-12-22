angular.module('conexs')
.controller('PolizasCtrl',['$scope','$state','$http','pushNotifications',function($scope,$state,$http,pushNotifications){
	$scope.showOnlyWthiSiniestros = true
	$scope.init = function(){
		$scope.list = {};
		var params = {}
		var url = 'http://api.conexseguros.com/list-polizas.php'
		if ($scope.showOnlyWthiSiniestros) {
			params = {
				siniestros: true
			}
		}
		var req = {
			url: 'http://api.conexseguros.com/list-polizas.php',
			method: 'POST',
			data: {
				user: window.localStorage['user']
			},
			params
		};
		$http(req).then(function(response){
			var list = response.data;
			$scope.order(list)
		},function(error){

		});
		if(window.localStorage['regid']){
			pushNotifications.sendDeviceInfo(window.localStorage['user']);
		}
	};
	$scope.order = function (list) {
		$scope.soats = list.filter(function (item) {
			if (item.formato === 'SOAT')
			return item
		})
		$scope.polizas = list.filter(function (item) {
			if (item.formato !== 'SOAT')
			return item
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
