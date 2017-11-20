(function () {
  angular.module('app.bantin')
    .controller('bantinController', bantinController);
  bantinController.$inject = ['$q', '$http', '$state', 'bantinService'];

  function bantinController($q, $http, $state, bantinService) {
    var vm = this;
    vm.turnActive = turnActive;
    vm.turn = 0;
    vm.bantin = {}

    function turnActive(state) {
      vm.turn = state;
    }
    init();

    function init() {
      function succeedCallback(bantin) {
        vm.bantins = bantin;
      }

      function errorCallback(err) {
        console.log(err);
      }
      bantinService.loadBantins().then(succeedCallback, errorCallback);
    }

    function deleteBantin(id) {
      function succeedCallback(response) {
        $state.go('admin.bantin', {
          reload: true
        });
        bantinService.loadBantins().then(function (bantin) {
          vm.bantins = bantin;
        }, function (err) {
          console.log(err);
        });
      }

      function errorCallback(err) {
        console.log(err);
      }
      bantinService.deleteBantin(id).then(succeedCallback, errorCallback);
    }
  }

})();
