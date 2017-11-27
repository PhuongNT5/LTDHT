(function () {
  angular.module('app.newspage')
    .controller('newspageController', newspageController);
  newspageController.$inject = ['$q', '$http', '$state', '$localStorage', '$location', 'bantinService', 'theloaiService', 'commentService'];

  function newspageController($q, $http, $state, $localStorage, $location, bantinService, theloaiService, commentService) {
    var vm = this;
    vm.bantin = {};
    vm.theloai = {};
    vm.comments = {};
    var bantinId = $state.params.Id;
    var theloaiId;
    var bantinNext = bantinId + 1;
    vm.addComment = addComment;
    vm.message = '';
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
      if ($localStorage.user != null) {
        var data = {
          Noidung: vm.comment,
          UserID: $localStorage.user.Id,
          BantinID: bantinId
        }
        commentService.createComment(data).then(function (comment) {
          $state.go('layout.newspage', {
            reload: true
          });
          location.reload();
        }, function (err) {
          console.log(err);
        });
      } else {
        vm.message = "Đăng nhập trước khi bình luận";
        toastr.error(vm.message);
      }

    }
  }
})();
