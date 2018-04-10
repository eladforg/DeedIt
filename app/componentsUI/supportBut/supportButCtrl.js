// controller for support buttons:

deeditApp.controller('supportButCtrl', function($scope, $location, activeUserSer, projectsSer ){

    // updating the user object on the project he's supporting:
    // $scope.supportProject = function(){
    //     console.log(activeUserSer.activeUser);
    //     console.log(projectsSer.projectName);
    // }


    // supporting a project:
    $scope.supportThisProject = function(projectObject){
        // console.log(projectObject.projectID);
        var projID=projectObject.projectID;
        $location.path('/video/'+projID);
    //    console.log('/video/'+projectObject.projectID);
    }


});
