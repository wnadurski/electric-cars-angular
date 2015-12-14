/**
 * Created by hyster on 14.12.15.
 */

(function() {
    angular.module('evs').
        controller('AddController', ['$scope', 'Vehicle', function($scope, Vehicle) {
            $scope.vehicle = {};
            $scope.add = function() {
                console.log("Adding " + $scope.vehicle);
                Vehicle.add($scope.vehicle).then(function(data) {
                    $scope.vehicle= {};
                });
            }
    }]);
})();