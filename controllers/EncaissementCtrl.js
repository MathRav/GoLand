app.controller("EncaissementCtrl",function($scope,$http,$window,base_url,client,devise,token){
    $scope.devise = devise;
    $scope.selected_devise  = $scope.devise[0].id;
    $scope.listeBanque =null;
    var tok = token.getToken();
    client.getListeBanqueClient().then(function(response){
        $scope.listeBanque = response.data.data;
    });
    $scope.encaisser = function(){
        $http.post(base_url+"Mouvement/Encaisser",{ Token : tok.chain , idBanque : $scope.selected_banque, devise : $scope.selected_devise, montant : $scope.montant}).then(function(response){
            $scope.msg = response.data.message;
        });
    }
});