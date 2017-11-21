angular.module('app.admin')
  .component('createHinhanh', {
    templateUrl: 'app/components/admin/hinhanh/createhinhanh/createhinhanh.html',
    controller: createhinhanhController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createhinhanhController.$inject = ['$q', '$http', '$state', '$scope', 'hinhanhService'];

function createhinhanhController($q, $http, $state, $scope, hinhanhService) {
  var vm = this;
  vm.hinhanh = {};
  vm.createHinhanh = createHinhanh;

  function turnActive(state) {
    vm.turn = state;
    console.log(vm.turn);
  }

  function createHinhanh() {
    if (validateForm()) {
      hinhanhService.createHinhanh(vm.hinhanh).then(successCallBack, errorCallBack);;
    }
  }

  function validateForm() {
    var isValid = true;

    if (!vm.user.username || vm.user.username && vm.user.username.length < 6) {
      toastr.error(err);
      isValid = false;
    }

    if (!vm.user.email) {
      toastr.error(err);
      isValid = false;
    }

    if (!vm.user.lastname || vm.user.lastname.length == 0) {
      toastr.error(err);
      isValid = false;
    }

    if (!vm.user.password || vm.user.password.length == 0) {
      toastr.error(err);
      isValid = false;
    }
    if (!vm.user.phone || vm.user.phone.length > 11) {
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
    $state.go('admin.hinhanh');
    hinhanhService.createHinhanh(vm.hinhanh).then(function (hinhanh) {
      vm.hinhanh = hinhanh;
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
