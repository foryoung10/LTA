angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaGeolocation, $http, Bus) {
	$scope.getLocation = function () {
        posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                $scope.lat = position.coords.latitude
                $scope.long = position.coords.longitude
            }, function (err) {
                // error
            });
    }
    $scope.getNearestBusStop = function()  {
        console.log('getJson')
        $scope.data = Bus.query();
        console.log('getJson')
    }
   /* $scope.getNearestBusStop= function()    {
        apikey ='0AnA9eXsKIAUtjgtqGvsmA4EqLx6eu3U'
        lat = 1.33508445119327
        lon = 103.747943090179
        distance = 100
        url = 'http://api.onemobility.sg/lta-bus-stops-arrival?apikey='+apikey+'&lat='+lat+'&lon='+lon+'&distance='+distance+'&?callback=JSONP_CALLBACK'
        console.log(url)
        //$httpProvider: $httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $http.jsonp(url)
            //.then( function ( response ) {
             //   $scope.data = response.data;
            .success(function(data){
               $scope.data = data
                // $scope.bus = data.description;
            console.log('Success');
           // $scope.bus = resp.data.description
            // For JSON responses, resp.data contains the result
        }//,function(err) {
           // console.error('ERR', err);
            // err.status will contain the status code
        //}
        )*/
       // console.log(da)


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
})

