
deeditApp.controller('videoAdCtrl', function($scope, activeUserSer, projectsSer, $routeParams){
    
    // we always need to make sure projects array is loaded, so we call it:
    projectsSer.load();

    //taking the current project id:
    $scope.currentProjectID = $routeParams.projID;
    $scope.currentProjectObject=null;

    //passing all the list of projectsArray:
    $scope.projectsArray=[];
    $scope.projectsArray=projectsSer.projectsArray;
    
    //finding out the current chosen project:
    for(var i=0; i<$scope.projectsArray.length; i++){

        if ($scope.currentProjectID==$scope.projectsArray[i].projectID){
            $scope.currentProjectObject=$scope.projectsArray[i];
            // console.log($scope.currentProjectObject);
        }else{}
    }


    //connecting with the relevant userobject:
    $scope.currentUser = activeUserSer.activeUser; //perhaps we shall not use it as we always want to use the existing user from the usersServive.
    

// connecting the current project with current user:
    
    if(!activeUserSer.activeUser.supportedProjects[$scope.currentProjectID]){
        activeUserSer.activeUser.supportedProjects[$scope.currentProjectID]=0;
    }else{
        
    }
    
    
    
    
    //collecting coins per video, and requesting another video:
    
    $scope.collectAndRequest = function(){
        $scope.collectCoins();
        // $scope.requestVideo();
    }

    // function for both total coins and per project coins
    $scope.collectCoins = function(){
        $scope.userTotalCoins();
        $scope.addtoProjectCoins();
        $scope.userPerProjectCoins();
    }
    // specific function for total coins:
    $scope.userTotalCoins = function(){
        activeUserSer.activeUser.totalCoins+=25;
        // console.log(activeUserSer.activeUser.totalCoins);
        
    }

    // specific function for per user per project:
    $scope.userPerProjectCoins = function(){
        activeUserSer.activeUser.supportedProjects[$scope.currentProjectID]+=25;
        console.log(activeUserSer.activeUser.supportedProjects);
    }

    // specific function to add coins to a project (regardless of the user):
    $scope.addtoProjectCoins = function(){
        $scope.currentProjectObject.projectCoins+=25;
        // console.log($scope.currentProjectObject.projectCoins);
    }
    // specific function for requesting video:
    $scope.requestVideo = function(){
        
    }



    //at the end we're using object and not array:
    //for(var j=0; j<=activeUserSer.activeUser.projectsObjArray.length; j++){
        //     if($scope.currentProjectObject.projectID!=activeUserSer.activeUser.projectsObjArray[j].projectID){
        //     activeUserSer.activeUser.projectsObjArray.push($scope.currentProjectObject);
            
        //     }else{}
        // }
        // console.log(activeUserSer.activeUser.projectsObjArray);
});