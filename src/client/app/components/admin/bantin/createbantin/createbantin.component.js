angular.module('app.admin')
  .component('createBantin', {
    templateUrl: 'app/components/admin/bantin/createbantin/createbantin.html',
    controller: createbantinController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createbantinController.$inject = ['$q', '$http', '$state', '$scope', '$location', 'theloaiService', 'bantinService'];

function createbantinController($q, $http, $state, $scope, $location, theloaiService, bantinService) {
  var vm = this;
  vm.bantin = {};
  vm.theloais = {};
  vm.isValid = true;
  vm.createBantin = createBantin;
  init();
  vm.bantin.TheloaiId = 8;

  function init() {
    function errorCallBack(err) {
      console.log(err);
    }
    theloaiService.getTheloais().then(response => {
      vm.theloais = response;
    }, errorCallBack)
  }

  function validateForm() {
    var isValid = true;
    if (!vm.bantin.TenTacgia || vm.bantin.TenTacgia.match(/^([a-zA-Z0-9]{6,})$/)) {
      toastr.error("Tên tác giả chưa thích hợp");
      isValid = false;
    }
    if (!vm.bantin.TenBantin) {
      toastr.error("Chưa nhập tên bản tin");
      isValid = false;
    }
    if (!vm.bantin.Noidung) {
      toastr.error("Chưa nhập nội dung");
      isValid = false;
    }
    return isValid;
  }

  function createBantin() {
    if (validateForm()) {
      bantinService.createBantin(vm.bantin).then(successCallBack, errorCallBack);
    }

    function successCallBack(response) {
      $state.go('admin.bantin');
      toastr.success("Success");
      bantinService.loadBantins(vm.bantin).then(function (bantin) {
        vm.bantins = bantin;
      }, function (err) {
        console.log(err);
      });;
      location.reload();
    }

    function errorCallBack(err) {
      console.log(err);
      toastr.error(err);
    }



  };
};
