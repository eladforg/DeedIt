deeditApp.controller('projectsCtrl', function($scope, projectsSer, activeUserSer){

    $scope.projectsArray = [];
    projectsSer.load();

    $scope.projectsArray=projectsSer.projectsArray;

    
});