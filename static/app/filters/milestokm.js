/**
 * Created by hyster on 13.12.15.
 */
(function()
{
    angular.module("evs").
    filter('milestokm', function () {
        return function (input) {
            return Math.round(input * 1.609344);
        }
    });
})();