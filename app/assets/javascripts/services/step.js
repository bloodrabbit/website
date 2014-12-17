(function() {
  "use strict";

  angular.module('steplib').factory('step',
    ['$http', function($http) {

    var step = function(stepId) {
      this.id = stepId;
    };

    step.prototype.fetch = function() {
      var thisStep = this;

      var requestUrl = '/step/'+thisStep.id+'.json';
      return $http.get(requestUrl).then(function(response) {
        angular.extend(thisStep, response.data);
        return response;
      });
    };

    return step;

  }]);

})();
