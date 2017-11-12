/*jshint esversion: 6*/

(function () {
  angular.module('app.homepage')
    .controller('homePageController', homePageController);
  homePageController.$inject = ['$q', '$http', '$state', 'bantinService'];

  function homePageController($q, $http, $state, bantinService) {
    var vm = this;
    vm.bantins = {};
    init();

    function init() {

      function succeedCallback(bantin) {
        vm.bantins = bantin;
        console.log(vm.bantins);
      }

      function errorCallback(err) {
        console.log(err);
      }
      bantinService.loadBantins().then(succeedCallback, errorCallback);
    }
  }
})();
