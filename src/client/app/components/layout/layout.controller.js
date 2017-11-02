(function () {
  angular.module('app.layout')
    .controller('layoutController', layoutController);
  layoutController.$inject = ['$q', '$http', '$state', 'theloaiService'];

  function layoutController($q, $http, $state, theloaiService) {
    var vm = this;
    init();

    function init() {

      function succeedCallback(theloais) {
        vm.theloais = theloais;
        console.log(vm.theloais);
      }

      function errorCallback(err) {
        console.log(err);
      }
      theloaiService.getTheloais().then(succeedCallback, errorCallback);
    }
  }
})();
