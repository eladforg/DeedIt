// A service to handle the users for logging in and pulling out user info

deeditApp.factory('activeUserSer', function($q, $http){

    // a user constructor:
    var User = function(user){

        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
   
    var usersArray=[];

    //when user logs in, first with one hard-coded user:
    // loading the json of all users:

    function loadUsers(){
        usersArray.splice(0,usersArray.length);
        var async = $q.defer();

        $http.get('app/data/users.json').then(
            //on success:
            function(response){
                for (var i=0; i<response.data.length; i++){
                    usersArray.push(new User(response.data[i]));
                }

                async.resolve();
            },
            
            //on error
            function(response){
                alert("users json was not loaded!");

                async.reject();
        });

        return async.promise;
    }
   
   //the access:
    return{
        loadUsers:loadUsers,
        usersArray:usersArray

    }

});