deeditApp.controller('projectsCtrl', function($scope, projectsSer){

    $scope.projectsArray = [];
    projectsSer.load();

    $scope.projectsArray=projectsSer.projectsArray;
});