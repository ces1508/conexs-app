angular.module('conexs').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      cache:false,
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('polizas', {
      url: '/polizas',
      cache: false,
      templateUrl: 'templates/listView.html',
      controller: 'PolizasCtrl'
    })
    .state('perfil', {
      url: '/perfil',
      cache: false,
      templateUrl: 'templates/perfil.html',
      controller: 'PerfilCtrl'
    })
    .state('PDetalle', {
      url:'/detalle/:poliza_id',
      templateUrl:'templates/detalle.html',
      controller:'DetalleCtrl',
      cache: false
    })
    .state('listSiniestros', {
      url:'/polizas/:poliza_id/siniestros',
      cache:false,
      templateUrl:'templates/listSiniestros.html',
      controller:'ListSiniestrosCtrl'
    })
    .state('dSiniestro', {
      url:'/siniestro/:id',
      cache:false,
      templateUrl:'templates/dSiniestro.html',
      controller:'dSiniestroCtrl'
    })
    .state('atencion', {
      url:'/poliza/:id/atencion',
      cache:true,
      templateUrl:'templates/atencion.html',
      controller:'atencionCtrl'
    })
    .state('notifications', {
      url:'/notifications',
      cache: false,
      templateUrl: 'templates/notifications.html',
      controller: 'AllNotificationsCtrl'
    })
    .state('notification', {
      url:'/notification/:notification_id',
      templateUrl: 'templates/notification.html',
      controller: 'NotificationCtrl',
      cache: false
    })
  $urlRouterProvider.otherwise('/login');
})
