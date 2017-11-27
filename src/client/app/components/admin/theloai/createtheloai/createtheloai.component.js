angular.module('app.admin')
  .component('createTheloai', {
    templateUrl: 'app/components/admin/theloai/createtheloai/createtheloai.html',
    controller: createtheloaiController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createtheloaiController.$inject = ['$q', '$http', '$state', '$scope', '$location', 'theloaiService'];

function createtheloaiController($q, $http, $state, $scope, $location, theloaiService) {
  var vm = this;
  vm.theloai = {};
  vm.createTheloai = createTheloai;

  function validateForm() {
    var isValid = true;
    if (!vm.theloai.TenTheloai) {
      toastr.error("Chưa nhập Ten The loai");
      isValid = false;
    }
    return isValid;
  }
  // init();
  function createTheloai() {
    if (validateForm()) {
      theloaiService.createTheloai(vm.theloai).then(successCallBack, errorCallBack);
    }

    function successCallBack(response) {
      toastr.success("Tạo thành công!");
      $state.go('admin.theloai', {
        reload: true
      });
      location.reload();
    }

    function errorCallBack(err) {
      console.log(err);
    }
  };
};
