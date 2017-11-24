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
  // init();
  function createTheloai() {
    location.reload();

    function successCallBack(response) {
      $state.go('admin.theloai', {
        reload: true
      });
    }

    function errorCallBack(err) {
      console.log(err);
    }
    theloaiService.createTheloai(vm.theloai).then(successCallBack, errorCallBack);

  };
};
