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
        
        //and moving on to next page:
        $scope.afterLoginPage();
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
        alert("are you sure?");
    }

    // function to move to next page after valid login:
    $scope.afterLoginPage = function (){
        if (isUserValid){
            //hiding the modal using jquery (though it's not a good practice to use jquery with angular, rather angularUI bootstrap)
            // $('.modal-backdrop').remove();
            // $('#signInModal').modal('toggle');
            // $('#signInModal').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            $location.path('/projects');
            }else{}
    }
    
    
// ---------------------------------------signup-----------------------------------------------------------------

    // collecting user sign up details:
    $scope.userFullName="";
    $scope.userAge=""; //young/adult/senior
    $scope.userGender=""; //man/woman
    $scope.userEmail="";
    $scope.userPass="";
    $scope.userConPass="";
    $scope.userTerms=false;

    // making sure user details are valid:
    //if
    
    
});