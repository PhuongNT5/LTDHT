angular.module('app.admin')
  .component('createTheloai', {
    templateUrl: 'app/components/admin/theloai/createtheloai/createtheloai.html',
    controller: createtheloaiController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createtheloaiController.$inject = ['$q', '$http', '$state', '$scope', 'theloaiService'];

function createtheloaiController($q, $http, $state, $scope, theloaiService) {
  var vm = this;
  vm.createTheloai = createTheloai;
  // init();
  function createTheloai() {
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
