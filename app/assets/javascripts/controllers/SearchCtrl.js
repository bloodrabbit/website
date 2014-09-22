(function() {
  "use strict";

  angular.module("Steplib").controller('SearchCtrl',
    ['$scope', '$http', 'StepCollection',
    function($scope, $http, StepCollection) {

    $scope.step_collection = new StepCollection();

    $scope.init = function() {
      $scope.step_collection.fetch();
    }

  }]);
})();
