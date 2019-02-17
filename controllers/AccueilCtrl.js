app.controller("AccueilCtrl",function($scope,$http,$window,base_url,client,devise,token){
    token.checkToken();
    client.getAllAccount().then(function(response){
        console.log(response.data.body);
        $scope.allAccount = response.data.data;
    });
    client.getListeMouvement().then(function(response){
        console.log(response.data.body);
        $scope.listeMouvement = response.data.data;
    });
});