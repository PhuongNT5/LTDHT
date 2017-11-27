angular.module('app.admin')
  .component('createComment', {
    templateUrl: 'app/components/admin/comment/createcomment/createcomment.html',
    controller: createCommentController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createCommentController.$inject = ['$q', '$http', '$state', '$scope', '$location', 'commentService'];

function createCommentController($q, $http, $state, $scope, $location, commentService) {
  var vm = this;
  vm.comment = {};
  vm.createComment = createComment;

  function turnActive(state) {
    vm.turn = state;
  }

  function validateForm() {
    var isValid = true;
    if (!vm.comment.Noidung) {
      toastr.error("Chưa nhập nội dung comment");
    }
    if (!vm.comment.UserID) {
      toastr.error("Chưa xác định người  nhập");
    }
    return isValid;
  }

  function createComment() {
    if (validateForm()) {
      commentService.createComment(vm.comment).then(successCallBack, errorCallBack);
    }


    function successCallBack(response) {
      toastr.success("Tạo thành công!");
      $state.go('admin.comment', {
        reload: true
      });
      location.reload();
    }

    function errorCallBack(err) {
      if (err) {
        for (var i = 0; i < err.Errors.length; i++) {
          toastr.error(err.Errors[i]);
        }
      }
    }
  }

}
