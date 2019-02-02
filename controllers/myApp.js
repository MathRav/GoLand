var app = angular.module('myApp',['ngCookies']);
app.constant('base_url','http://localhost:8082/');
app.service('token',['$cookies','$window',function($cookies,$window){
    this.checkToken= function(){
        if(!$cookies.getObject('token')){
            $window.location.href = "register.html";
        }
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