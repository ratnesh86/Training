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
        
        httpservice.getCompanies($scope.pattern).then(             //modified this to create
        
        (data)=>{$scope.companies=data;
        $scope.$digest();
         },
    (error)=>{
        $scope.companies=[];
        $scope.$digest();
    }
        )
    }

}]);

mod.service('httpservice',['$http',function($http){                         
    this.getCompanies=function(pattern){
        return new Promise(function(resolve,reject)
        {
        $http.get("http://localhost:4780/mongo-api/cnames/"+pattern).then(
        
        (response)=>{resolve(response.data);},
        (error)=>{reject([]);}
        );

        });
}
}]);