deeditApp.controller('profileCtrl', function($scope, activeUserSer, projectsSer){

    // we always need to make sure projects array is loaded (in case we need to use it on this Ctrl), so we call it:
    projectsSer.load();
    //and we can pass it (we can pass it straight into the array that we want to build --> the array to hold all the active projects (later we'll add to it the amount of user coins for each project).
    $scope.userProjectsArray=projectsSer.projectsArray;

    //passing the active user object:
    $scope.activeUser=activeUserSer.activeUser;
    // console.log($scope.activeUser);

    //passing the user details (because I passed the user as object above than we can erase the activeUserSer below).
    
    $scope.userName=activeUserSer.activeUser.name;
    $scope.userEmail=activeUserSer.activeUser.email;
    $scope.userGender=activeUserSer.activeUser.gender;
    $scope.userAge=activeUserSer.activeUser.age;

    // passing user and its projects
    $scope.userProjects=$scope.activeUser.supportedProjects;
    // console.log($scope.userProjectsArray);
    // console.log($scope.userProjects);

    // looping into the userProjects object.
    // if we locate an id equal to one in the array than we'll add it's property:
    // there are two ways to do it:
    //1. using a for in loop for object (object doesn't have a length property).
    //2. using the method of Object.keys(nameoofbject).
    
    //let's start with 1:
    //looping in the object:
    for (var prop in $scope.userProjects){
        // console.log(prop, $scope.userProjects[prop])
        //running in the loop of the array:
        for(i=0; i<$scope.userProjectsArray.length;i++){
            if(prop==$scope.userProjectsArray[i]["projectID"]){
                $scope.userProjectsArray[i].projectUserCoins= $scope.userProjects[prop];
                  
                // console.log($scope.userProjectsArray);
            }
        }
    }


    
    



});