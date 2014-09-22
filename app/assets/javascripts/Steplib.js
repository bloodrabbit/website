
angular.module("Steplib", [
  // 'ngResource',
  'btford.markdown',
  ]);

$(document).on('ready page:load', function() {
  angular.bootstrap(document, ['Steplib']);
})
