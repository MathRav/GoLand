var app = angular.module('myApp',['ngCookies']);
app.constant('base_url','https://­stormy-bastion-67986.­herokuapp.com/');
app.constant('devise',[{ id : 'MGA', nom : 'Ariary'},{ id : 'EUR', nom : 'Euro'},{ id : 'USD', nom : 'Dollars'}]);
app.service('token',['$cookies','$window',function($cookies,$window){
    this.checkToken= function(){
        if(!$cookies.getObject('token')){
            $window.location.href = "index.html";
        }
    }
    this.getToken = function(){
        return $cookies.getObject('token');
    }
    this.disconnect = function(){
        $cookies.remove("token");
        $window.location.href = "index.html";
    }
}]);
app.service('client',['$http','base_url','token',function($http,base_url,token){
    this.getListeBanqueClient= function(){
        var tok = token.getToken();
        return $http.post(base_url+"Banque/ListeBanqueClient",{ Token : tok.chain});
        /*    console.log(response.data.body);
            if(response.data.Status == "200"){
                return response.data.body;
            }
            else {
                return null;
            }
        });*/
    }
    this.getListeBanque= function(){
        var tok = token.getToken();
        return $http.post(base_url+"Banque/ListeBanque",{ Token : tok.chain});
        /*    console.log(response.data.body);
            if(response.data.Status == "200"){
                return response.data.body;
            }
            else {
                return null;
            }
        });*/
    }
    this.getAllAccount = function(){
        var tok = token.getToken();
        return $http.post(base_url+"Banque/AllAccount",{ Token : tok.chain});
    }
    this.getListeMouvement = function(){
        var tok = token.getToken();
        return $http.post(base_url+"Mouvement/ListeMouvement",{ Token : tok.chain});
    }
}]);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
app.config(function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
});
/*app.config(function($routeProvider){
    $routeProvider
    .when("/acceuil",{
        templateUrl : "index.html"
    });
});*/