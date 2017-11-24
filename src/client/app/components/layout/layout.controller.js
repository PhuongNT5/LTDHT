(function () {
  angular.module('app.layout')
    .controller('layoutController', layoutController);
  layoutController.$inject = ['$q', '$http', '$state', '$localStorage',
    'theloaiService', 'userService'
  ];

  function layoutController($q, $http, $state, $localStorage, theloaiService, userService) {
    var vm = this;
    vm.theloais = {}
    vm.username = '';
    vm.password = '';
    vm.message = '';
    vm.users = {};
    vm.warning = {};
    vm.signin = signin;
    vm.logout = logout;
    init();

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

    function errorCallback(err) {
      console.log(err);
    }

    function signin() {
      // var data = {
      //   username: vm.username,
      //   password: vm.password
      // };
      userService.loadUsers().then(response => {
        vm.users = response
      }, errorCallback);
      for (var i = 0; i < vm.users.length; i++) {
        if (vm.email == vm.users[i].Email) {
          if (vm.password == vm.users[i].Password) {
            // vm.username = vm.users[i].Username;
            $(".nav-collapse2").collapse('hide');
            $localStorage.user = vm.users[i];
            vm.username = $localStorage.user.Username;

          } else {
            vm.message = "Username hoặc mật khẩu không đúng";
            toastr.error("vm.message");
          }
        }
      }
    }

    function logout() {
      localStorage.clear();
      location.reload();
    }
  }
})();
