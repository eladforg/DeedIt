
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


    //connecting with the relevant userobject:
    $scope.currentUser = activeUserSer.activeUser;
    

     
    
    //collecting coins per video, and requesting another video:
    $scope.coins=0;

    $scope.collectAndRequest = function(){
        $scope.collectCoins();
        // $scope.requestVideo();
    }

    // function for both total coins and per project coins
    $scope.collectCoins = function(){
        $scope.userTotalCoins();
        // $scope.userPerProjectCoins();
    }
    // specific function for total coins:
    $scope.userTotalCoins = function(){
        $scope.coins += 25;
        console.log($scope.coins);
        return $scope.coins;
    }

    // specific function for per user per project:
    $scope.userPerProjectCoins = function(){
        
    }

    // specific function to add coins to a project (regardless of the user):
    $scope.addtoProjectCoins = function(){
        
    }
    // specific function for requesting video:
    $scope.requestVideo = function(){
        
    }

});