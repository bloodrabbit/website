(function() {
  "use strict";

  angular.module("Steplib").controller('ShowStepCtrl',
    ['$scope', '$http', 'Step',
    function($scope, $http, Step) {

    $scope.stepToShow = null;

    $scope.init = function(stepId) {
      $scope.stepToShow = new Step(stepId);
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
