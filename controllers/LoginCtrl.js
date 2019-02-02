app.controller('LoginCtrl',['$scope','$http','$cookies','$window','base_url','token', function($scope,$http,$cookies,$window,base_url,token){
    $scope.testLogin = function(){
        $http.post(base_url+"Connection/Connexion",{nom : $scope.login, password : $scope.password}).then(function(response){
            if(response.data.Status == "200"){
                $cookies.putObject('token',response.data.body);
                $window.location.href = "acceuil.html";
            }
            else {
                $scope.msg = "Login/Mot de passe incorrectes";
            }
        });
    }
}]);