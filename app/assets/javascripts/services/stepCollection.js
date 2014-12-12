(function() {
  "use strict";

  angular.module('steplib').factory('stepCollection',
    ['$http', function($http) {

    var stepCollection = function() {
    };

    stepCollection.prototype.fetch = function() {
      var thisStepCollection = this;
      //
      return $http.get('/steps.json').then(function(response) {
        angular.extend(thisStepCollection, response.data);
        return response;
      });
    };

    return stepCollection;

  }]);

})();
