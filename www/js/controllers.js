angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaGeolocation) {
	$scope.getLocation = function () {
		posOptions = {timeout: 10000, enableHighAccuracy: false};
		$cordovaGeolocation
			.getCurrentPosition(posOptions)
			.then(function (position) {
			$scope.lat  = position.coords.latitude
			$scope.long = position.coords.longitude
		}, function(err) {
      // error
    });
	}
	
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

