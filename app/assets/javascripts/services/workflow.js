(function() {
	"use strict";

	angular.module('steplib').factory('workflow',
		[function() {

		var workflow = function() {
			this.workflowData = {
				format_version: "0.9.0",
				meta: {
					comment: 'This workflow was created with the http://www.steplib.com Workflow Editor.'
				},
				workflow: {
					environments: [
						{
							mapped_to: 'TEST_ENV',
							value: 'Test value',
							is_expand: true
						}
					],
					steps: [
					]
				}
			};
		};

		workflow.prototype.setWorkflowData = function(wfData) {
			this.workflowData = wfData;
		};

		workflow.prototype.appendStepVersion = function(stepVer) {
			this.workflowData.workflow.steps.push(stepVer);
		};

		workflow.prototype.toJSONString = function(isPretty) {
			isPretty = (isPretty === undefined ? false : isPretty);
			return angular.toJson(this.workflowData, isPretty);
		};

		return workflow;

	}]);

})();
