/**
 * Created by hyster on 13.12.15.
 */

(function(){
    angular.module("evs").
        controller('ListController', [ '$scope', 'Vehicle', function($scope, Vehicle) {
            $scope.vehicles = [];
            $scope.loaded = false;

            Vehicle.all().success(function(data) {
                $scope.vehicles =data;
                $scope.loaded = true;
            })
    }]);
})();