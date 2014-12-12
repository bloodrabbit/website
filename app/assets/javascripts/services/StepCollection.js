(function() {
  "use strict";

  angular.module('steplib').factory('stepCollection',
    ['$http', function($http) {

    var StepCollection = function() {
    };

    StepCollection.prototype.fetch = function() {
      var step_collection = this;
      //
      return $http.get('/steps.json').then(function(response) {
        angular.extend(step_collection, response.data);
        return response;
      });
    };

    return StepCollection;

  }]);

})();
