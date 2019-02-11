app.controller("DecaissementCtrl",function($scope,$http,$window,base_url,client,devise,token){
    $scope.listeBanque =null;
    var tok = token.getToken();
    client.getListeBanqueClient().then(function(response){
        $scope.listeBanque = response.data.body;
        $scope.selected_banque = $scope.listeBanque[0].id;
    });
    $scope.decaisser = function(){
        $http.post(base_url+"Mouvement/Decaisser",{ Token : tok.chain , idBanque : $scope.selected_banque, numero : $scope.numero, montant : $scope.montant}).then(function(response){
            $scope.msg = response.data.body;
        });
    }
});