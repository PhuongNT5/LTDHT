/*jshint esversion: 6*/

(function () {
  angular.module('app.homepage')
    .controller('homePageController', homePageController);
  homePageController.$inject = ['$q', '$http', '$state', 'bantinService', 'theloaiService'];

  function homePageController($q, $http, $state, bantinService, theloaiService) {
    var vm = this;
    vm.bantins = {};
    vm.theloais = {};
    init();

    function init() {
      function succeedCallback(bantin) {
        vm.bantins = bantin;
        vm.bantins.sort(function (a, b) {
          return b.Id - a.Id
        });
      }

      function errorCallback(err) {
        console.log(err);
      }

      function succeedTheloaiCallback(theloai) {
        vm.theloais = theloai;
      }

      bantinService.loadBantins().then(succeedCallback, errorCallback);
      theloaiService.getTheloais().then(succeedTheloaiCallback, errorCallback);
    }
  }
})();
