angular.module('conexs')
.controller('NoifiCtrl',function ($scope,$state) {
	// body...
	$scope.go = function(){
		$state.go('notifications');
	};
	$scope.hidde = function(){
		$scope.go();
		$('.notfication').css({display:'none'});
		var notificacion = $('#noti');
		notificacion.remove();
	};
});