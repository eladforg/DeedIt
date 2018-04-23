deeditApp.controller('profileCtrl', function($scope, activeUserSer, projectsSer){

    //passing the user details:
    $scope.userName=activeUserSer.activeUser.name;
    $scope.userEmail=activeUserSer.activeUser.email;
    $scope.userGender=activeUserSer.activeUser.gender;
    $scope.userAge=activeUserSer.activeUser.age;

});