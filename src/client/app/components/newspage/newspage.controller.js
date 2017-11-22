(function () {
  angular.module('app.newspage')
    .controller('newspageController', newspageController);
  newspageController.$inject = ['$q', '$http', '$state', 'bantinService', 'theloaiService'];

  function newspageController($q, $http, $state, bantinService, theloaiService) {
    var vm = this;
    vm.bantin = {};
    vm.theloai = {};
    vm.comments = {};
    var bantinId = $state.params.Id;
    var theloaiId;
    var bantinNext = bantinId + 1;
    vm.addComment = addComment;
    init();

    function init() {
      function succeedCallback(bantin) {
        vm.bantin = bantin;
        vm.comments = vm.bantin.Comments;
        console.log(vm.comments);
        theloaiService.getTheloaiById(vm.bantin.TheloaiId).then(succeedTheloaiCallback, errorCallback);
      }

      function errorCallback(err) {
        console.log(err);
      }

      function succeedTheloaiCallback(theloai) {
        vm.theloai = theloai;
      }
      bantinService.getBantinById(bantinId).then(succeedCallback, errorCallback);

    }

    function addComment() {

    }
  }
})();
