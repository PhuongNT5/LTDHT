angular.module('app.admin')
  .component('createUser', {
    templateUrl: 'app/components/admin/user/createuser/createuser.html',
    controller: createuserController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createuserController.$inject = ['$q', '$http', '$state', '$scope', 'userService'];

function createuserController($q, $http, $state, $scope, userService) {
  var vm = this;
  vm.user = {};
  vm.createUser = createUser;

  function createUser() {
    if (validateForm()) {
      userService.createUser(vm.user).then(successCallBack, errorCallBack);;
    }
  }

  function validateForm() {
    var isValid = true;

    if (!vm.user.username || vm.user.Username && vm.user.Username.length < 6) {
      toastr.error(err);
      isValid = false;
    }

    if (!vm.user.Email) {
      toastr.error(err);
      isValid = false;
    }

    if (!vm.user.Password || vm.user.Password.length == 0) {
      toastr.error(err);
      isValid = false;
    }

    if (!vm.user.confirmPassword || vm.user.confirmPassword != vm.user.password) {
      toastr.error(err);
      isValid = false;
    }
    return isValid;
  }

  function successCallBack(response) {
    $state.go('admin.usermanage');
    userService.createUser(vm.user).then(function (user) {
      vm.user = user;
    }, function (err) {
      console.log(err);
    });;
  }

  function errorCallBack(err) {
    if (err) {
      for (var i = 0; i < err.Errors.length; i++) {
        toastr.error(err.Errors[i]);
      }
    }
  }

}
