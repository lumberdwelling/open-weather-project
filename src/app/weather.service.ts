var zip = angular.module('zipCode', []);

app.controller('weatherCtrl', function($scope, $http) {

    $scope.zip = [];
  
    $scope.callOpenWeatherMap = function(searchZip){
      $http.jsonp('http://api.openweathermap.org/data/2.5/find?q=' + searchZip + ',us&units=imperial&APPID=4372f5664f2189869696f5af296fa35d=&callback=JSON_CALLBACK')
        .then(function(data){
          console.log('success', data);
          $scope.cities = data;
      }).catch(function(error){
          console.log('error', error);
  
      });
    };
  
  });