deeditApp.controller('projectInfoCtrl', function($scope, projectsSer, $routeParams){

   // we always need to make sure projects array is loaded, so we call it:
   projectsSer.load();

   //passing all the list of projectsArray:
   $scope.projectsArray=[];
   $scope.projectsArray=projectsSer.projectsArray;

   //taking the current project id:
   $scope.currentProjectID = $routeParams.projID;   

   // creating a new object refrence that will point to the active project.
   $scope.currentProjectObject=null;

   //finding out the current chosen project:
   for(var i=0; i<$scope.projectsArray.length; i++){

        if ($scope.currentProjectID==$scope.projectsArray[i].projectID){
            $scope.currentProjectObject=$scope.projectsArray[i];
            // console.log($scope.currentProjectObject);
        }else{}
    }

    // console.log($scope.currentProjectObject);


// now that we have the current project we can extract its' data:

    // this statement is for passing the object to the support button directive, so we can open the video ad page also from the project-info page:
    $scope.projectItem=$scope.currentProjectObject;

    

});