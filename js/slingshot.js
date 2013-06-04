angular.module('gdgSlingshot',[]).config(function($routeProvider) {
    $routeProvider.
        when("/",  {templateUrl:'form.html', controller:formControl});
});

function formControl($scope){
    
}