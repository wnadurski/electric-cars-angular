/**
 * Created by hyster on 13.12.15.
 */

(function(){
    angular.module('evs').
        factory('Vehicle', ['$http', function VehicleFactory($http) {
            return {
               all: function() { return $http({method: "GET", url: "api/vehicles"});},
               add: function(ev) { return $http.post("api/vehicles/add", ev);}
            } ;
    }]);
})();