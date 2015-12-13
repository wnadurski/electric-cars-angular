(function(){
    console.log("HER3E");
    angular.module("evs").
        config(function($routeProvider, $locationProvider) {
        console.log("HER2E");
            $routeProvider.when("/", {
                templateUrl: "/app/templates/main.html"
            });

            $routeProvider.when("/vehicles", {
                templateUrl: "app/templates/list.html",
                controller: "ListController"
            })

        $locationProvider.html5Mode(true);
    });
})();