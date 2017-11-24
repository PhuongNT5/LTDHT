angular.module('app.admin')
  .component('createComment', {
    templateUrl: 'app/components/admin/comment/createcomment/createcomment.html',
    controller: createCommentController,
    controllerAs: 'vm',
    bindings: {

    }
  });
createCommentController.$inject = ['$q', '$http', '$state', '$scope', 'commentService'];

function createCommentController($q, $http, $state, $scope, commentService) {
  var vm = this;
  vm.comment = {};
  vm.createComment = createComment;

  function turnActive(state) {
    vm.turn = state;
    console.log(vm.turn);
  }

  function createComment() {
    if (validateForm()) {
      commentService.createcomment(vm.comment).then(successCallBack, errorCallBack);
    }
  }

  function validateForm() {
    var isValid = true;
    return isValid;
  }

  function successCallBack(response) {
    $state.go('admin.comment');
    commentService.createComment(vm.comment).then(function (comment) {
      vm.comment = comment;
    }, function (err) {
      console.log(err);
    });;
  }

  function errorCallBack(err) {
    if (err) {
      for (var i = 0; i < err.Errors.length; i++) {
        toastr.error(err.Errors[i]);
      }
    }
  }

}
