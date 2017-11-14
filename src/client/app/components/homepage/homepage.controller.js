/*jshint esversion: 6*/

(function () {
  angular.module('app.homepage')
    .controller('homePageController', homePageController);
  homePageController.$inject = ['$q', '$http', '$state', 'bantinService'];

  function homePageController($q, $http, $state, bantinService) {
    var vm = this;
    vm.bantins = {};
    vm.news = [];
    init();

    function init() {
      function succeedCallback(bantin) {
        vm.bantins = bantin;
        console.log(vm.bantins);
        for (i = 0; i < 3; i++) {
          vm.news.push(vm.bantins[i]);
        }
        console.log(vm.news[0].Anh[0]);
      }

      function errorCallback(err) {
        console.log(err);
      }
      bantinService.loadBantins().then(succeedCallback, errorCallback);
    }
  }
})();
