(function () {
  angular.module('app.theloai')
    .controller('theloaiController', theloaiController);
  theloaiController.$inject = ['$q', '$http', '$state', 'theloaiService'];

  function theloaiController($q, $http, $state, theloaiService) {
    var vm = this;
    vm.turnActive = turnActive;
    vm.turn = 0;
    vm.theloais = {};
    vm.deleteTheloai = deleteTheloai;

    function turnActive(state) {
      vm.turn = state;
    }
    init();

    function init() {
      // function succeedCallback(theloai) {
      //     vm.theloais = theloai;
      // }

      function errorCallback(err) {
        console.log(err);
      }
      theloaiService.getTheloais().then(function (theloai) {
        vm.theloais = theloai;
      }, errorCallback);
    }

    function deleteTheloai(theloaiId) {
      function succeedCallback(response) {
        $state.go('admin.theloai', {
          reload: true
        });
        theloaiService.getTheloais().then(function (theloai) {
          vm.theloais = theloai;
        }, function (err) {
          console.log(err);
        });
      }

      function errorCallback(err) {
        console.log(err);
      }
      theloaiService.deleteTheloai(theloaiId).then(succeedCallback, errorCallback);
    }

    //     function errorCallback(err) {
    //         console.log(err);
    //     }
    //     unitService.getUnitByUnitId(unitId).then(function (unit) {
    //         if (unit.lessons.length == 0) {
    //             unitService.deleteUnit(unitId).then(succeedCallback, errorCallback);
    //         }
    //         else {
    //             toastr.error('Unit exists lessons. must not delete');
    //         }
    //     }, function (err) {
    //         console.log(err);
    //     })
    //     // unitService.deleteUnit(unitId).then(succeedCallback, errorCallback);
    // }

  }

})();
