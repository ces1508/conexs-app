$('document').find('.notification').css('display','none');
angular.module('conexs')
.controller('AllNotificationsCtrl',['$scope','$http',function($scope,$http){
	$scope.init = function(){
	$scope.notifications = {};
	$scope.contenido = true;
	var req = {
		method: 'GET',
		url: 'http://api.conexseguros.com/list-notifications.php?user='+ window.localStorage['user'],
	};
	$http(req).then(function(response){
		$scope.notifications = response.data;
		if(response.data.error){
			$scope.contenido= false;
		}
	},function(error){
	});
	};
	$scope.init();

$(document).ready(function(){
	var noti = document.getElementById('noti');
	if(noti){
		$('.notfication').css({display:'none'});
		var notificacion = $('#noti');
		notificacion.remove();
	}

});
}]);
