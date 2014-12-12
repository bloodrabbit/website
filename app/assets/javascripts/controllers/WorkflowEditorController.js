(function() {
	"use strict";

	angular.module("steplib").controller('WorkflowEditorController',
		['$scope', 'stepCollection', 'workflow', 'progressState',
		function($scope, stepCollection, workflow, progressState) {

		$scope.openStepCollection = new stepCollection();
		$scope.availableSteps = [];
		$scope.openStepCollectionProgState = new progressState();
		$scope.stepSearchQuery = null;
		$scope.isShowStepCollection = false;
		$scope.isPrettyPrintWorkflowJSON = true;

		$scope.workflowModel = new workflow();
		$scope.serializedWorkflowStr = '';


		$scope.$watch('workflowModel.workflowData', function() {
			$scope.serializeWorkflow();
		}, true);

		$scope.init = function() {
			$scope.serializeWorkflow();
			//
			$scope.openStepCollection.fetch().then(function() {
				// success
				$scope.availableSteps = _.values($scope.openStepCollection.steps);
				angular.forEach($scope.availableSteps, function(aStep) {
					aStep.selectedVersion = aStep.versions[0];
				});
			}, function(response) {
				// error
				alert('Failed to load the Step Collection!');
			});
		};

		$scope.serializeWorkflow = function() {
			$scope.serializedWorkflowStr = $scope.workflowModel.toJSONString($scope.isPrettyPrintWorkflowJSON);
		}

		$scope.insertStepVersionIntoWorkflow = function(stepVersionData) {
			$scope.stepSearchQuery = '';
			$scope.isShowStepCollection = false;
			$scope.workflowModel.appendStepVersion(stepVersionData);
		};

	}]);

})();
