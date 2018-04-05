var deeditApp = angular.module('deeditApp', ['ngRoute']);


//creating router:
deeditApp.config(function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl:"app/home/home.html",
        controller:"homeCtrl"
    })
    .when("/projects", {
        templateUrl:"app/projects/projects.html",
        controller:"projectsCtrl"
    })
    .when("/profile", {
        templateUrl:"app/profile/profile.html",
        controller:"profileCtrl"
    })
    .otherwise({
        redirectTo:"/"
    })

});