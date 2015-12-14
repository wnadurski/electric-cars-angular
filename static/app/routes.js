(function(){
    console.log("HER3E");
    angular.module("evs").
        config(function($routeProvider, $locationProvider) {

        $routeProvider.when("/", {
            templateUrl: "/app/templates/main.html"
        });

        $routeProvider.when("/vehicles", {
            templateUrl: "app/templates/list.html",
            controller: "ListController"
        });

        $routeProvider.when("/vehicles/add", {
            templateUrl: "app/templates/add.html",
            controller: "AddController"
        })

        $locationProvider.html5Mode(true);
    });
})();