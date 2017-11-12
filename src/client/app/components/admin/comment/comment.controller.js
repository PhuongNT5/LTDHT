(function () {
  angular.module('app.comment')
    .controller('commentController', commentController);

  function commentController() {
    var vm = this;
    vm.turnActive = turnActive;
    vm.turn = 0;
    vm.comment = {}

    function turnActive(state) {
      vm.turn = state;
    }
    init();


  }

})();
