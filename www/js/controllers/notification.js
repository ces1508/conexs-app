angular.module('conexs')
.controller('NotificationCtrl',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$scope.notification_id = $stateParams.notification_id;
	var req= {
		method: 'GET',
		url: 'http://api.conexseguros.com/getNotification.php?id='+ $scope.notification_id,
	};
	$http(req).then(function(response){
		$scope.notification = response.data[0];
	},function(error){
	});
	var notificacion = $('#noti');
	notificacion.remove();


	$scope.goLink =function(q){
		cordova.InAppBrowser.open(q , '_blank', 'location=yes');
	}
}]);
