/**
 * Created by hyster on 13.12.15.
 */
(function(){
    angular.module('evs').
        directive("card", function() {
       return {
          restrict: "E",
           templateUrl: "/app/templates/card.html",
           scope : {
               vehicle: "="
           }

       } ;
    });
})();