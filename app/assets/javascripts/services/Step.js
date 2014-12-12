(function() {
  "use strict";

  angular.module('steplib').factory('step',
    ['$http', function($http) {

    var Step = function(stepId) {
      this.id = stepId;
      this.error = null;
    };

    Step.prototype.fetch = function() {
      var step = this;

      var requestUrl = '/step/'+step.id+'.json';
      return $http.get(requestUrl).then(function(response) {
        angular.extend(step, response.data);
        return response;
      });
    };

    return Step;

  }]);

})();
