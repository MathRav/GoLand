app.controller('LoginCtrl',['$scope','$http','$cookies','$window','base_url','token', function($scope,$http,$cookies,$window,base_url,token){
    $scope.testLogin = function(){
        $http.post(base_url+"Connection/Connexion",{nom : $scope.login, password : $scope.password}).then(function(response){
            if(response.data.error == 0){
                $cookies.putObject('token',response.data.data);
                $window.location.href = "accueil.html";
            }
            else {
                $scope.msg = response.data.message;
            }
        });
    }
}]);