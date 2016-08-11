$('document').find('.notification').css('display','none');
angular.module('conexs')
.controller('AllNotificationsCtrl',['$scope','$http',function($scope,$http){
	//console.log('notificaiones funcionando :)');
	$scope.init = function(){
	$scope.notifications = {};
	$scope.contenido = true;
	var req = {
		method: 'GET',
		url: 'http://192.168.0.8:80/conexs/list-notifications.php?user='+ window.localStorage['user'],
	};
	$http(req).then(function(response){
		$scope.notifications = response.data;
		console.log($scope.notifications);
		if(response.data.error){
			console.log(response.data.error);
			$scope.contenido= false;
		}
	},function(error){
		console.log(error);
	});
	};
	$scope.init();

$(document).ready(function(){
	var noti = document.getElementById('noti');
	console.log(document.getElementById('noti'));
	if(noti){
		$('.notfication').css({display:'none'});
		var notificacion = $('#noti');
		notificacion.remove();
	}

});
}]);
