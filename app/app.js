var deeditApp = angular.module('deeditApp', ['ngRoute']);


//creating router:
// deeditApp.config(function($routeProvider){

//     $routeProvider
//     .when("/", {
//         templateUrl:"app/home/home.html",
//         controller:"homeCtrl"
//     })
//     .when("/gallery", {
//         templateUrl:"app/dogsList/dogsList.html",
//         controller:"dogsListCtrl"
//     })
//     .when("/chosendog/:breedName", {
//         templateUrl:"app/chosenDogImages/chosenDogImages.html",
//         controller:"chosenDogCtrl"
//     })
//     .otherwise({
//         redirectTo:"/"
//     })

// });