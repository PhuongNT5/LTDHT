(function () {
  angular.module('app.theloaidetail')
    .controller('theloaidetailController', theloaidetailController);
  theloaidetailController.$inject = ['$q', '$http', '$state', 'theloaiService'];

  function theloaidetailController($q, $http, $state, theloaiService) {
    var vm = this;
    var theloaiId = $state.params.Id;
    vm.bantins = {};
    init();

    function init() {

      function errorCallback(err) {
        console.log(err);
      }

      function succeedCallback(bantin) {
        vm.bantins = bantin;
        vm.news = vm.bantins.Bantins;
      }

      theloaiService.getTheloaiById(theloaiId).then(succeedCallback, errorCallback);
    }
  }
})();
