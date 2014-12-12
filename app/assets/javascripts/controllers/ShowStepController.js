(function() {
  "use strict";

  angular.module("steplib").controller('ShowStepController',
    ['$scope', 'step',
    function($scope, step) {

    $scope.stepToShow = null;

    $scope.init = function(stepId) {
      $scope.stepToShow = new step(stepId);
      $scope.stepToShow.fetch().then(function(response) {
        //
      });
    };

    $scope.linkToStepVersion = function(aStepVersion) {
      var stepGithub = aStepVersion.source.git;
      var baseGithubUrl = stepGithub.replace(/\.[^/.]+$/, "");
      return baseGithubUrl+"/tree/"+aStepVersion.version_tag;
    };

  }]);
})();
