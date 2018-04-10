deeditApp.controller('welcomeCtrl', function($scope, $location, activeUserSer){


    $scope.usersArray=[];

        
    var isUserValid = false;
    
    // function for loading and comparing users:
    $scope.loadCompare= function(){
        
        activeUserSer.loadUsers().then(function(){

        $scope.usersArray = activeUserSer.usersArray;
        // console.log($scope.usersArray);
        
        //and then comparing:
        $scope.compareUser();
        if (isUserValid){
        element.modal("hide");
        $location.path('/projects');
        }else{}
    });

    }


    //function for comapring user with what entered:
    $scope.compareUser = function(){

        for (var i=0; i<$scope.usersArray.length; i++){

            if($scope.useremail == $scope.usersArray[i].email && $scope.userpass == $scope.usersArray[i].password){
                // alert ("user exist");               
                activeUserSer.activeUser = $scope.usersArray[i];
                isUserValid=true;
                return activeUserSer.activeUser;

            }else{
                
            }

        }
        alert("are you sure?")
    }

    
    


});