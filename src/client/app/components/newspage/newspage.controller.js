(function () {
  angular.module('app.newspage')
    .controller('newspageController', newspageController);
  newspageController.$inject = ['$q', '$http', '$state', 'bantinService'];

  function newspageController($q, $http, $state, bantinService) {
    var vm = this;
    vm.bantin ={};
    init();
    function init(){
      function succeedCallback(bantin) {
        vm.bantin = bantin;
    }

    function errorCallback(err) {
        console.log(err);
    }
    bantinService.getBantinById(bantinId).then(succeedCallback, errorCallback);

    }

  }
})();
