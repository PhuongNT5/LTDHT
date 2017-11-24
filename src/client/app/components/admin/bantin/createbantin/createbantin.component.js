angular.module('app.admin')
  .component('createBantin', {
    templateUrl: 'app/components/admin/bantin/createbantin/createbantin.html',
    controller: createbantinController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createbantinController.$inject = ['$q', '$http', '$state', '$scope', 'theloaiService', 'bantinService'];

function createbantinController($q, $http, $state, $scope, theloaiService, bantinService) {
  var vm = this;
  vm.bantin = {};
  vm.theloais = {};
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

  function createBantin() {
    console.log(vm.bantin)

    function successCallBack(response) {
      $state.go('admin.bantin', {
        reload: true
      });
    }

    function errorCallBack(err) {
      console.log(err);
    }
    bantinService.createBantin(vm.bantin).then(successCallBack, errorCallBack);

  };
};
