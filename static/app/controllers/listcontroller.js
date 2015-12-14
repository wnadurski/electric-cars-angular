/**
 * Created by hyster on 13.12.15.
 */

(function(){
    angular.module("evs").
        controller('ListController', [ '$scope', 'Vehicle', 'socket', function($scope, Vehicle, socket) {
            $scope.vehicles = [];
            $scope.loaded = false;

            Vehicle.all().success(function(data) {
                $scope.vehicles = data;
                $scope.loaded = true;
            });

            socket.on("evAdded", function(ev) {
                console.log("Someone added an EV!");
                console.log(ev);
                if(!existsInArrayById($scope.vehicles, ev)) {
                    $scope.vehicles.push(ev);
                }
            });
    }]);
})();

function existsInArrayById(array, element) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].id === element.id){
            return true;
        }
    }

    return false;
};