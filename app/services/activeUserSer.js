// A service to handle the users for logging in and pulling out user info

deeditApp.factory('activeUserSer', function($q, $http){

    // a user constructor:
    var User = function(user){

        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.gender=user.gender; //man/woman
        this.age=user.age; //young/adult/senior
        this.totalCoins=0;
        // this.projectsObjArray=[]; //{projectName:"", projectID:"", userCoinsForProject:""},{projectName:"", projectID:"", userCoinsForProject:""} Nir thinks its better to use object instead of Array.
        this.supportedProjects={}  //key-projectID : value-coins  
        
    }
   
    var usersArray=[];

    // we need activeUser and for now we'll use a demo one. so we dont have to login.
    var activeUser={
        "name":"remo user",
        "email":"r@go.co",
        "password":"321",
        "gender":"man",
        "age":"adult",
        "totalCoins":0,
        "supportedProjects":{}
    };
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
        usersArray:usersArray,
        activeUser:activeUser
    }

});