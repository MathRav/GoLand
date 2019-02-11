app.controller("CreationCompteCtrl",function($scope,$http,$window,base_url,client,devise,token){
    $scope.listeBanque =null;
    $scope.devise = devise;
    var tok = token.getToken();
    client.getListeBanque().then(function(response){
        console.log(response.data.body);
        $scope.listeBanque = response.data.body;
    });
    $scope.createAccount = function(){
        $http.post(base_url+"Connection/CreateAccount",{ Token : tok.chain , idBanque : $scope.selected_banque, devise : $scope.selected_devise}).then(function(response){
                $scope.msg = response.data.body;
        });
    }
});