var  APPNAME = 'jangkrikApp',
     app     = angular.module(APPNAME, ['ngRoute']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [APPNAME]);
});