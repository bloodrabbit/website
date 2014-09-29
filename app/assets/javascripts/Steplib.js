
angular.module("Steplib", [
  // 'ngResource',
  'ngSanitize',
  'btford.markdown'
  ]);

$(document).on('ready page:load', function() {
  angular.bootstrap(document, ['Steplib']);
});
