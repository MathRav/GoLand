app.controller("RegisterCtrl",function($scope,$http,$window,base_url){
    $scope.inscrire = function(){
        $http.post(base_url+"Connection/Inscription",{nom : $scope.login, password : $scope.password,numero : $scope.numero}).then(function(response){
            $scope.msg = response.data.message;
            //$window.location.href = "index.html";
        });
    }
});