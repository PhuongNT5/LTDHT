(function () {
  'use strict';

  angular.module('app.homepage')
    .directive('bantinTheloai', bantinTheloai);

  /* @ngInject */
  function bantinTheloai() {
    var directive = {
      restrict: 'EA',
      scope: {
        Id: "="
      },
      templateUrl: 'app/shared/directives/bantin-theloai/bantin-theloai.html'
    };

    bantinTheloaiController.$inject = ['$scope', 'bantinService'];

    function bantinTheloaiController($scope, bantinService) {
      var vm = this;

    }
    return directive;
  }

})();
