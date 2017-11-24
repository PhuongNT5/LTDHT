(function () {
  angular.module('app.user')
    .controller('userController', userController);
  userController.$inject = ['$q', '$http', '$state', 'userService'];

  function userController($q, $http, $state, userService) {
    var vm = this;
    vm.user = {};
    vm.turnActive = turnActive;
    vm.turn = 0;

    function turnActive(state) {
      vm.turn = state;
    }
    init();

    function init() {
      function errorCallback(err) {
        console.log(err);
      }
      userService.loadUsers().then(function (user) {
        vm.user = user;
      }, errorCallback);
    }
  }

})();
