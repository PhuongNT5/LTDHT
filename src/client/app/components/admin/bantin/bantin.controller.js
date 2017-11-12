(function () {
  angular.module('app.bantin')
    .controller('bantinController', bantinController);
  bantinController.$inject = ['$q', '$http', '$state'];

  function bantinController($q, $http, $state) {
    var vm = this;
    vm.turnActive = turnActive;
    vm.turn = 0;
    vm.bantin = {}

    function turnActive(state) {
      vm.turn = state;
    }
    init();


  }

})();
