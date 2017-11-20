(function () {
  'use strict';

  angular.module('app.homepage')
    .directive('listBantin', listBantin);

  /* @ngInject */
  function listBantin() {
    var directive = {
      controller: listBantinController,
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {
        theloai: "="
      },
      templateUrl: 'app/shared/directives/list-bantin/list-bantin.html'
    };

    listBantinController.$inject = ['$scope', 'theloaiService'];

    function listBantinController($scope, theloaiService) {
      var vm = this;
      vm.theloai = $scope.theloai;
      vm.bantins = {};
      vm.news = {};
      init();

      function init() {

        function errorCallback(err) {
          console.log(err);
        }

        function succeedCallback(bantin) {
          vm.bantins = bantin;
          vm.news = vm.bantins.Bantins;
        }

        theloaiService.getTheloaiById(vm.theloai.Id).then(succeedCallback, errorCallback);
      }
    }
    return directive;
  }

})();
