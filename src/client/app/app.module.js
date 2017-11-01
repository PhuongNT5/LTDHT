(function () {
  'use strict';

  angular.module('app', [
    'ui.router',
    'angular-jwt',
    'ngStorage',
    'ngAnimate',
    'ngSanitize',
    'ngplus',
    'app.config',
    'app.services',
    'app.layout',
    'app.homepage',
    'app.admin',

    'blocks.exception',
    'blocks.logger',
    'blocks.router',
    'infinite-scroll'
  ]);

})();
