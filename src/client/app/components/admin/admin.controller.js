(function () {
  angular.module('app.admin')
    .controller('adminController', adminController);
  adminController.$inject = ['$q', '$http', '$state'];

  function adminController($q, $http, $state) {
    var vm = this;
    vm.turnActive = turnActive;
    vm.turn = 0;

    function turnActive(state) {
      vm.turn = state;
    }
    vm.name = '';
    init();
  }

})();
