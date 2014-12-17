//
// Generic 'progress state' manager.
//	NOT a percent based progress, just distinct states:
//		* default
//		* in-progress
//		* finished with success
//		* finished with error
//
// You can use the cssClass() method to get the background's CSS class for the current state.
//
// If an error occurs - if you call finishedWithError() - you can get the error message
//	from \a errorMessage
//
angular.module('steplib').factory('progressState', function() {

	var cssClassForInProgress = 'progress-inprogress';
	var cssClassForError = 'progress-error';
	var cssClassForDefault = 'progress-default';

	//
	// Constructor method
	var progressState = function() {
		this.resetState();
	};

	//
	// Reset to the 'default' state
	progressState.prototype.resetState = function() {
		this.isInProgress = false;
		this.errorMessage = null;
		// can mark "should be saved" items, ex: an input is changed but not yet saved
		//  will be reseted when progress 'finishes with success'
		this.isDirty = false;
	};


	progressState.prototype.isError = function() {
		if (this.errorMessage === null || this.errorMessage === undefined) {
			return false;
		}
		return true;
	};

	//
	// Switch to 'in progress' state
	progressState.prototype.startInProgress = function() {
		this.isInProgress = true;
		this.errorMessage = null;
	};

	//
	// Switch to 'finished' state and store an error-message
	progressState.prototype.finishedWithError = function(errMsg) {
		errMsg = (errMsg !== undefined && errMsg !== null ? errMsg : '');

		this.isInProgress = false;
		this.errorMessage = errMsg;
	};

	//
	// Switch to 'finished' state without any error message
	progressState.prototype.finishedWithSuccess = function() {
		this.isInProgress = false;
		this.isDirty = false;
	};

	//
	// Get the background's CSS class for the current state.
	progressState.prototype.cssClass = function() {
		if (this.isInProgress) {
			return cssClassForInProgress;
		}
		if (this.isError()) {
			return cssClassForError;
		}
		return cssClassForDefault;
	};

	return progressState;

});
