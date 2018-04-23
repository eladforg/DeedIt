// creating projects service:

deeditApp.factory('projectsSer', function($http, $q, $location){

    // array of projects
    var projectsArray=[];
    var wasEverLoaded=false;
    //project constructor:
    var Project = function(projObj){
        this.projectName=projObj.projectName;
        this.projectID=projObj.projectID;
        this.projectImage=projObj.projectImage;
        this.projectSummary=projObj.projectSummary;
        this.projectGoal=projObj.projectGoal;
        // this.projectFullInfo=projectFullInfo;
        this.projectDaysLeft= daysTimer(projObj.deadline);
        // this.progressBar= function(progressBar){};
        this.projectCoins = 0;

        //details for the more info page:
        this.projectOrg=projObj.projectOrg;

    }

    //creating a countdown day timer:
    function daysTimer(endDay){
        var endDate = new Date(endDay).getTime(); //milsec
        var currentdate = new Date().getTime();
        var daysLeft = endDate-currentdate;
        daysLeft = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
        return daysLeft;
    }


    // uploading projects with a $q load function:
    var load =function(){

        // projectsArray.splice(0,projectsArray.length);

        var async = $q.defer();
        // Checking if the projects array was ever loaded:
        if (wasEverLoaded) {
            // Immediatly resolving the promise since cars is already available
            async.resolve();
        } else {
        $http.get("app/projects/projectsList.json").then(function(response){
            //onsuccess:
            // console.log(response);
            for(var i=0; i<response.data.length; i++){
                let projObj = response.data[i];
                
                projectsArray.push(new Project(projObj));
                
                  
                }          
            
            wasEverLoaded=true;            
            async.resolve();
            },
                // onfail:
            function(response){
                console.log("error");
                async.reject();
            }
        );
        }
        return async.promise;   
    };

    // the service object access:
   return {
       load:load,
       projectsArray:projectsArray
   }

});