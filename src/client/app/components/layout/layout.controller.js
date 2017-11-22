(function () {
  angular.module('app.layout')
    .controller('layoutController', layoutController);
  layoutController.$inject = ['$q', '$http', '$state', 'theloaiService'];

  function layoutController($q, $http, $state, theloaiService) {
    var vm = this;
    vm.theloais = {}
    vm.username = '';
    vm.password = '';
    vm.warning = {};
    init();
    vm.signin = signin;

    function init() {
      $(document).ready(function () {
        $("#myBtn").click(function () {
          $("#myModal").modal();
        });
      });

      function succeedCallback(theloais) {
        vm.theloais = theloais;
      }

      function errorCallback(err) {
        console.log(err);
      }
      theloaiService.getTheloais().then(succeedCallback, errorCallback);
    }

    function signin() {
      var data = {
        username: vm.username,
        password: vm.password,
        grant_type: 'password'
      };
    }
  }
})();
