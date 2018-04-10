// controller for support buttons:

deeditApp.controller('supportButCtrl', function($scope, activeUserSer, projectsSer ){

    // updating the user object on the project he's supporting:
    $scope.supportProject = function(){
        console.log(activeUserSer.activeUser);
        console.log(projectsSer.projectName);
    }


});
