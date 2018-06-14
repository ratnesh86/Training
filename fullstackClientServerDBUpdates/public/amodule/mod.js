var mod = angular.module('restmod',[]);

/*mod.controller("rest",function($scope)              //scope here is bind variable and whatever we do here with scope will be reflected in view as well
{
    $scope.pattern="";                              //any value entered here willbe updated on html page as well

//    $scope.companies=['abc','xyz','pqr'];
    $scope.companies=[];
    $scope.readpattern=function(){
        console.log($scope.pattern);
    }
});
*/

mod.controller("rest",['httpservice','$scope',function(httpservice,$scope)              //scope here is bind variable and whatever we do here with scope will be reflected in view as well
{
    $scope.pattern="";                              //any value entered here willbe updated on html page as well

//    $scope.companies=['abc','xyz','pqr'];
    $scope.companies=[];
    
    $scope.readpattern=function(){
//        console.log($scope.pattern);

        httpservice.getCompanies($scope.pattern);
    }

}]);

mod.service('httpservice',['$http',function($http){
    this.getCompanies=function(pattern){
    $http.get("http://localhost:4780/mongo-api/cnames/"+pattern).then(
        
        (data)=>{console.log(data)},
        (error)=>{console.log(error)}
        );
}
}]);