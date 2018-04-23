var deeditApp = angular.module('deeditApp', ['ngRoute', 'ngAnimate']);


//creating router:
deeditApp.config(function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl:"app/welcome/welcome.html",
        controller:"welcomeCtrl"
    })
    // .when("/home", {
    //     templateUrl:"app/home/home.html",
    //     controller:"homeCtrl"
    //})
    .when("/projects", {
        templateUrl:"app/projects/projects.html",
        controller:"projectsCtrl"
    })
    .when("/profile", {
        templateUrl:"app/profile/profile.html",
        controller:"profileCtrl"
    })

    .when("/video/:projID", {
        templateUrl:"app/videoAd/videoAd.html",
        controller:"videoAdCtrl"
    })

    .when("/aboutus", {
        templateUrl:"app/aboutus/aboutus.html",
        controller:"aboutusCtrl"
    })

    .when("/project-info", {
        templateUrl:"app/projects/project-info.html",
        controller:"projectInfoCtrl"
    })
    
    .otherwise({
        redirectTo:"/projects"
    })

});