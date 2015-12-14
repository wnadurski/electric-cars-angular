/**
 * Created by hyster on 14.12.15.
 */

(function(){
    angular.module("evs").
        factory('socket', ['$rootScope', function($rootScope){
        console.log("Connecting");
        var socket = io.connect();

        return {
          on : function(event, callback) {
              socket.on(event, function(data) {
                  $rootScope.$apply(function () {
                  //    callback.apply(socket, arguments);
                      if(callback) {
                          callback(data);
                      }
                  });

              });
          },
            emit: function(event, data, callback) {
                socket.emit(event, data, function() {
                   $rootScope.$apply(function() {
                      if(callback) {
                          callback.apply(socket,args);
                      }
                   });
                });
            }
        };
    }]);
})();