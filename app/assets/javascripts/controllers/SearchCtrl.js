(function() {
  "use strict";

  angular.module("Steplib").controller('SearchCtrl',
    ['$scope', '$http', 'StepCollection',
    function($scope, $http, StepCollection) {

    $scope.step_collection = new StepCollection();
    $scope.available_steps = [];

    $scope.init = function() {
      $scope.step_collection.fetch().then(function() {
        $scope.available_steps = _.values($scope.step_collection.steps);
      });
    };

    $scope.linkToStepVersion = function(aStepVersion) {
      var stepGithub = aStepVersion.source.git;
      var baseGithubUrl = stepGithub.replace(/\.[^/.]+$/, "");
      return baseGithubUrl+"/tree/"+aStepVersion.source.tag;
    };

  }]);
})();
