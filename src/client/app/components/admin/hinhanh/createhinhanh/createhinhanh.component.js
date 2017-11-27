angular.module('app.admin')
  .component('createHinhanh', {
    templateUrl: 'app/components/admin/hinhanh/createhinhanh/createhinhanh.html',
    controller: createhinhanhController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createhinhanhController.$inject = ['$q', '$http', '$state', '$location', '$scope', 'hinhanhService'];

function createhinhanhController($q, $http, $state, $scope, $location, hinhanhService) {
  var vm = this;
  vm.anhBantin = {};
  vm.createHinhanh = createHinhanh;

  function turnActive(state) {
    vm.turn = state;
  }

  function validateForm() {
    var isValid = true;
    if (!vm.anhBantin.Anh) {
      toastr.error("Chua nhap Linkanh");
      isValid = false;
    }

    return isValid;
  }


  function createHinhanh() {
    if (validateForm()) {
      hinhanhService.createHinhanh(vm.anhBantin).then(successCallBack, errorCallBack);;
    }

    function successCallBack(response) {
      toastr.success("Tạo thành công!");
      $state.go('admin.hinhanh', {
        reload: true
      });
      location.reload();
    }

    function errorCallBack(err) {
      if (err) {
        for (var i = 0; i < err.Errors.length; i++) {
          toastr.error(err.Errors[i]);
        }
      }
    }
  }

}
