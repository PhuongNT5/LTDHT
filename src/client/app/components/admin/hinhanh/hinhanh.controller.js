(function () {
  angular.module('app.hinhanh')
    .controller('hinhanhController', hinhanhController);
  hinhanhController.$inject = ['$q', '$http', '$state', 'hinhanhService'];

  function hinhanhController($q, $http, $state, hinhanhService) {
    var vm = this;
    vm.turnActive = turnActive;
    vm.turn = 0;
    vm.hinhanh = {}

    function turnActive(state) {
      vm.turn = state;
    }
    init();

    function init() {
      function succeedCallback(hinhanh) {
        vm.hinhanhs = hinhanh;
      }

      function errorCallback(err) {
        console.log(err);
      }
      hinhanhService.getHinhanhs().then(function (hinhanh) {
        vm.hinhanhs = hinhanh;
      }, errorCallback);
    }

    function deleteHinhanh(hinhanhId) {
      function succeedCallback(response) {
        $state.go('admin.hinhanh', {
          reload: true
        });
        hinhanhService.loadhinhanhs().then(function (hinhanh) {
          vm.hinhanhs = hinhanh;
        }, function (err) {
          console.log(err);
        });
      }
    }
  }

})();
