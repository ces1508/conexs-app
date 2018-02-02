// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('conexs')
.run(function($ionicPlatform,pushNotifications,$cordovaDevice,$state) {
  document.addEventListener('deviceready',function(){
    // pushNotifications.register();
  });
  $ionicPlatform.ready(function() {

    var push =  PushNotification.init({

      android:{
        "senderID": "43898332858",
        "icon": "icon.png",
        "iconColor": "#F3F781",
        "sound": "true"
      },
      ios: {
        alert:true,
        bagde: true,
        sound:  "true",
        clearBadge: "true",
        senderID: "43898332858",
        gcmSandbox: "false",
      }})

      push.on('registration', function (data) {
        alert('registration', data.registrationId)
        if(!window.localStorage['regid']) {
          window.localStorage['regid'] = data.registrationId
        }
        if (window.localStorage['user']) {
          pushNotifications.sendDeviceInfo(window.localStorage['user'])
        }
      })

      push.on('notification', function (data) {
        alert(data)
        console.log('llego notification', JSON.stringify(data))
        if (data.additionalData.coldstart || data.additionalData.foreground) {
          $('.button_2').append('<span class="notification" id="noti"></span>');
        } else {
          $state.go('notification',{notification_id:data.additionalData.notification_id});
        }
      })
      push.on('error', function (err) {
        alert('error ', err)
        console.log('el error es ', err)
      })
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    })
  });
