(function () {
  angular.module('app.newspage')
    .controller('newspageController', newspageController);
  newspageController.$inject = ['$q', '$http', '$state', '$localStorage', 'bantinService', 'theloaiService', 'commentService'];

  function newspageController($q, $http, $state, $localStorage, bantinService, theloaiService, commentService) {
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
    var data = {
      Noidung: vm.comment,
      UserID: $localStorage.user.Id,
      BantinID: bantinId
    }

    function addComment() {
      commentService.createComment(data).then(function (comment) {
        $state.go('layout.newspage', {
          reload: true
        });
      }, function (err) {
        console.log(err);
      });
    }
  }
})();
