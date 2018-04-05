// creating projects service:

deeditApp.factory('projectsSer', function($http, $q, $location){

    // array of projects
    var projectsArray=[];
    
    //project constructor:
    var Project = function(projObj){
        this.projectName=projObj.projectName;
        this.projectImage=projObj.projectImage;
        this.projectSummary=projObj.projectSummary;
        this.projectGoal=projObj.projectGoal;
        // this.projectFullInfo=projectFullInfo;
        // this.projectDaysLeft= function(projectDaysLeft){};
        // this.progressBar= function(progressBar){};

    }


    // uploading projects with a $q load function:
    var load =function(){

        projectsArray.splice(0,projectsArray.length);

        var async = $q.defer();

        $http.get("app/projects/projectsList.json").then(function(response){
            //onsuccess:
            // console.log(response);
            for(var i=0; i<response.data.length; i++){
                let projObj = response.data[i];
                
                projectsArray.push(new Project(projObj));
                
                  
                }          
            
                        
            async.resolve();
            },
                // onfail:
            function(response){
                console.log("error");
                async.reject();
            }
        );
        return async.promise;   
    };

    // the service object access:
   return {
       load:load,
       projectsArray:projectsArray
   }

});