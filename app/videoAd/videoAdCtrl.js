
deeditApp.controller('videoAdCtrl', function($scope, activeUserSer, projectsSer, videoAdSer, $timeout, $routeParams){
    
    
    
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
        $scope.projectCoinsbyUser=activeUserSer.activeUser.supportedProjects[$scope.currentProjectID];
    }else{
        $scope.projectCoinsbyUser=activeUserSer.activeUser.supportedProjects[$scope.currentProjectID]
    }
    
    
    
    // uploading a video when entering the page:
    $scope.playingVideo="app/videos/"+videoAdSer.videosArray[Math.floor(Math.random() * videoAdSer.videosArray.length)]+".mp4";
    
    // disable/enable button:
    $scope.buttonEnabled = true;
    $timeout(function() {
        $scope.buttonEnabled = false;
        }, 4000);


    //collecting coins per video, and requesting another video:
    
    $scope.collectAndRequest = function(){
        //moving the coins up and sound effect:
        $scope.isCollected=true;
        $scope.coinSound();

        //adding coins to all relevant objects:
        $scope.collectCoins();        
        //requesting a new video:
        $scope.playingVideo = videoAdSer.requestVideo();

        //timer for enabling the collect coins button:
        // disable/enable button:
        $scope.buttonEnabled = true;
                
        $timeout(function() {
            $scope.buttonEnabled = false;
            $scope.isCollected=false;
            }, 5000);
        
    }

    
    // function for both total coins and per project coins (with settime to fit the coinsup animation)        
    $scope.collectCoins = function(){
        $timeout(function(){
        $scope.userTotalCoins();
        $scope.addtoProjectCoins();
        $scope.userPerProjectCoins();
        },1000);
    }
    // specific function for total coins:
    $scope.userTotalCoins = function(){
        activeUserSer.activeUser.totalCoins+=3;
        // console.log(activeUserSer.activeUser.totalCoins);
        
    }

    // specific function for per user per project:
    $scope.userPerProjectCoins = function(){
        activeUserSer.activeUser.supportedProjects[$scope.currentProjectID]+=3;
        $scope.projectCoinsbyUser=activeUserSer.activeUser.supportedProjects[$scope.currentProjectID];
        // console.log(activeUserSer.activeUser.supportedProjects);
    }

    // specific function to add coins to a project (regardless of the user):
    $scope.addtoProjectCoins = function(){
        $scope.currentProjectObject.projectCoins+=3;
        // console.log($scope.currentProjectObject.projectCoins);
    }

    // creating a sound when collecting coins:
    $scope.coinSound = function() {
        var audio = new Audio('app/videos/coin3.mp3');
        audio.play();
    };

    //animating the coins:
    $scope.isCollected = false;




    // specific function for requesting video:
    // $scope.requestVideo = function(){
        
    // }

    // var buttonTimer = function(){
        
    //     $scope.buttonEnabled = true;
    //     $timeout(function() {
    //         $scope.buttonEnabled = false;
    //         }, 4000);
    // }

    //at the end we're using object and not array:
    //for(var j=0; j<=activeUserSer.activeUser.projectsObjArray.length; j++){
        //     if($scope.currentProjectObject.projectID!=activeUserSer.activeUser.projectsObjArray[j].projectID){
        //     activeUserSer.activeUser.projectsObjArray.push($scope.currentProjectObject);
            
        //     }else{}
        // }
        // console.log(activeUserSer.activeUser.projectsObjArray);
});