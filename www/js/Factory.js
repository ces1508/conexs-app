angular.module('conexs')
.factory('pushNotifications',['$http','$state','$cordovaDevice',function($http,$state,$cordovaDevice) {
	var pushNotifications;
	document.addEventListener('deviceready',function(){
		pushNotifications = window.plugins.pushNotification;
	});
	var user;

	var succesHandler = function(result){
		console.log('succesHandler' + result);
		// alert('result');
	};

	var errorHandler = function(error){
		console.log('error handler: '+ error);
		// alert('ha ocurrido un error :'+ error);
	};

	var tokenHandler = function(result){
		console.log('tokenHandler: '+result);
		// alert('token :' + result);
	};

	window.onNoticationAPN = function(event){

		if (event.alert)
		{

			navigator.notification.alert(event.alert);
			$state.go('alerts');
		}
		if (event.sound)
		{
			var snd = new Media(event.sound);
			snd.play();
		}
		if (event.badge)
		{
			pushNotifications.setApplicationIconBadgeNumber(succesHandler,errorHandler,event.badge);
		}
	};

	window.onNotification = function(e){

		console.log(e.event);
		switch(e.event){
			case "registered":
				if(e.regid.length > 0){
					console.log('regId: '+e.regid);
					// alert('regId :');
					// alert('registration_id :' + e.regid);
					window.localStorage['regid'] = e.regid;
				}
				break;
			case "message":
				if ( e.foreground ){
					$('.button_2').append('<span class="notification" id="noti"></span>');
					console.log(e.payload)
				}else{
					$state.go('notification',{notification_id:e.payload.notification_id});
				}
				break;
			default:
				console.log('ocurrió un error inesperado');
				alert('error registration' );
		}
	};

	return {
		register: function(){

				if($cordovaDevice.getPlatform().toLowerCase() === "android"){
					// alert('platform android');
					pushNotifications.register(

						succesHandler,
						errorHandler,
						{
							"senderID": "43898332858",
							"ecb": "onNotification"
						}

					);
				}
				else
				{
					pushNotifications.register(
						tokenHandler,
						errorHandler,
						{
							"badge": "true",
							"sound": "true",
							"alert": "true",
							"ecb": "onNoticationAPN"
						}
					);

				}
			},
		sendDeviceInfo: function(user){
			// alert('sendeviceinfo antes del if');
			if(window.plugins){

				var data={};
				data.user = user;
				data.regId = window.localStorage['regid'];
				data.platform = $cordovaDevice.getPlatform().toLowerCase();
				data.uuid = $cordovaDevice.getUUID();
				data.name = data.uuid + "["+data.platform +" " + $cordovaDevice.getVersion()+"]";
				 // alert(data.platform + data.uuid +data.name);
				var req = {
					method: 'POST',
					url: 'http://api.conexseguros.com/saveDeviceInfo.php',
					data : data
				};

				$http(req).then(function(response){
					if(response.data.ok){
						console.log('all ok');
						// alert('sendeviceinfo');
					}else{
						alert('response  error :'+  response.data.ok);
					}
				},function(error){
					// alert('error : '+ error);
				});
			}
		}
	};
}]);
