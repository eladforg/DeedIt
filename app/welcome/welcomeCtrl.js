deeditApp.controller('welcomeCtrl', function($scope,activeUserSer){


    $scope.usersArray=[];

        
    
    
    // function for loading and comparing users:
    $scope.loadCompare= function(){
        
        activeUserSer.loadUsers().then(function(){

        $scope.usersArray = activeUserSer.usersArray;
        console.log($scope.usersArray);

        //and then comparing:
        $scope.compareUser();
    });

    }


    //function for comapring user with what entered:
    $scope.compareUser = function(){

        for (var i=0; i<$scope.usersArray.length; i++){

            if($scope.useremail == $scope.usersArray[i].email && $scope.userpass == $scope.usersArray[i].password){
                alert ("user exist");
                return true;
            }else{
                
            }

        }
        alert("are you sure?")
    }

    
    


});