(function() {
  "use strict";

  angular.module('Steplib').factory('StepCollection', function($http) {

    var StepCollection = function() {
      this.error = null;
    };

    StepCollection.prototype.fetch = function() {
      var step_collection = this;
      $http({
        method: 'GET',
        url: '/steps.json',
      }).success(function(data/*, status, headers, config*/) {
        console.log("data: ", data);
        angular.extend(step_collection, data);
      }).error(function(data, status/*, headers, config*/) {
        step_collection.error = {
          'data': data,
          'status': status
        }
      });
    };

    return StepCollection;

  });

})();
