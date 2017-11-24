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
