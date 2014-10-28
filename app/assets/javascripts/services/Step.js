(function() {
  "use strict";

  angular.module('Steplib').factory('Step',
    ['$http', function($http) {

    var Step = function(stepId) {
      this.id = stepId;
      this.error = null;
    };

    Step.prototype.fetch = function() {
      var step = this;
      return $http({
        method: 'GET',
        url: '/step/'+step.id+'.json',
      }).then(function(response) {
        if (response.status === 200) {
          console.log("data: ", response.data);
          angular.extend(step, response.data);
        } else {
          step.error = {
            'data': response.data,
            'status': response.status,
            'response': response
          };
        }
      });
        
      // }).error(function(data, status/*, headers, config*/) {
        // step.error = {
        //   'data': data,
        //   'status': status
        // };
      // });
    };

    return Step;

  }]);

})();
