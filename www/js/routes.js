
angular.module('conexs')
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider

	.state('login',{
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	})
	.state('polizas',{
		url: '/polizas',
		templateUrl: 'templates/listView.html',
		controller: 'PolizasCtrl'
	})
	.state('perfil',{
		url: '/perfil',
		templateUrl: 'templates/perfil.html',
		controller:'PerfilCtrl'
	})
	.state('PDetalle',{
		url:'/detalle/:poliza_id',
		templateUrl:'templates/detalle.html',
		controller:'DetalleCtrl'
	})

	.state('notifications',{
		url:'/notifications',
		templateUrl: 'templates/notifications.html',
		controller: 'AllNotificationsCtrl'
	})
	.state('notification',{
		url:'/notification/:notification_id',
		templateUrl: 'templates/notification.html',
		controller: 'NotificationCtrl'
	})
	.state('politicas',{
		url:'/politicas',
		templateUrl:'templates/politicas.html'
	})
	;

	$urlRouterProvider.otherwise('/login');
});