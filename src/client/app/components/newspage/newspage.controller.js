(function () {
  angular.module('app.newspage')
    .controller('newspageController', newspageController);
  newspageController.$inject = ['$q', '$http', '$state', 'bantinService', 'theloaiService'];

  function newspageController($q, $http, $state, bantinService, theloaiService) {
    var vm = this;
    vm.bantin = {};
    vm.theloai = {};
    var bantinId = $state.params.Id;
    var theloaiId;
    var bantinNext = bantinId + 1;
    init();

    function init() {
      function succeedCallback(bantin) {
        vm.bantin = bantin;
        theloaiService.getTheloaiById(vm.bantin.TheloaiId).then(succeedTheloaiCallback, errorCallback);
      }

      function errorCallback(err) {
        console.log(err);
      }

      function succeedTheloaiCallback(theloai) {
        vm.theloai = theloai;
        console.log(vm.theloai);
      }

      bantinService.getBantinById(bantinId).then(succeedCallback, errorCallback);

    }

  }
})();
