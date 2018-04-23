deeditApp.controller('projectsCtrl', function($scope, projectsSer, activeUserSer){

    $scope.projectsArray = [];
    projectsSer.load();

    $scope.projectsArray=projectsSer.projectsArray;



     // I made a differnet way for passing the projectID to the next page.
    // if with the support button I used ng-click and $location.path. than,
    // this time I put the projectID straight on the ng-href link.

    
});