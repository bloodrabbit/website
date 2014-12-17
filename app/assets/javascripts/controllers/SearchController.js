(function() {
	"use strict";

	angular.module("steplib").controller('SearchController',
		['$scope', 'stepCollection',
		function($scope, stepCollection) {

		$scope.step_collection = new stepCollection();
		$scope.available_steps = [];

		$scope.init = function() {
			$scope.step_collection.fetch().then(function() {
				$scope.available_steps = _.values($scope.step_collection.steps);
			});
		};

		$scope.linkToStepVersion = function(aStepVersion) {
			var stepGithub = aStepVersion.source.git;
			var baseGithubUrl = stepGithub.replace(/\.[^/.]+$/, "");
			return baseGithubUrl+"/tree/"+aStepVersion.version_tag;
		};

	}]);
})();
