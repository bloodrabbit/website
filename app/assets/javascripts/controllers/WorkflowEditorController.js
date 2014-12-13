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

		var isShowWorkflowStepDetails = {};


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

		$scope.insertStepVersionIntoWorkflow = function(stepId, stepVersionData) {
			$scope.stepSearchQuery = '';
			$scope.isShowStepCollection = false;
			// set workflow specific params
			stepVersionData.id = stepId;
			stepVersionData.position_in_workflow = $scope.workflowModel.workflowData.workflow.steps.length;
			stepVersionData.is_always_run = false;
			angular.forEach(stepVersionData.inputs, function(aStepInput) {
				aStepInput.value = '';
			});
			// append to workflow
			$scope.workflowModel.appendStepVersion(stepVersionData);
			isShowWorkflowStepDetails[stepVersionData.id] = true;
		};

		$scope.toggleWorkflowStepDetails = function(workflowStep) {
			isShowWorkflowStepDetails[workflowStep.id] = !isShowWorkflowStepDetails[workflowStep.id];
		};

		$scope.isShowWorkflowStepDetails = function(workflowStep) {
			var isShow = !!isShowWorkflowStepDetails[workflowStep.id];
			return isShow;
		};

	}]);

})();
