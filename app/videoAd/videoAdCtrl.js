
deeditApp.controller('videoAdCtrl', function($scope, activeUserSer, projectsSer, $routeParams){
    
    //name of current project:

    $scope.currentProjectID = $routeParams.projID;
    $scope.currentProjectObject=null;

    //passing all the list of projectsArray:
    $scope.projectsArray=[];
    $scope.projectsArray=projectsSer.projectsArray;

    //finding out the current chosen project:
    for(var i=0; i<$scope.projectsArray.length; i++){

        if ($scope.currentProjectID==$scope.projectsArray[i].projectID){
            $scope.currentProjectObject=$scope.projectsArray[i];
            return $scope.currentProjectObject;
        }else{}
    }


    //connecting with the relevant user:
    
    
    
    
    //collecting coins per video
    // var coins=0;
    // $scope.collectCoins = function(){
    //     coins += 25;
    //     return coins;
    // }

});