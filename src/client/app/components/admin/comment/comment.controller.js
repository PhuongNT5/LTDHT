(function () {
  angular.module('app.comment')
    .controller('commentController', commentController);
  commentController.$inject = ['$q', '$http', '$state', 'commentService'];

  function commentController($q, $http, $state, commentService) {
    var vm = this;
    vm.turnActive = turnActive;
    vm.turn = 0;
    vm.comments = {}

    function turnActive(state) {
      vm.turn = state;
    }
    init();

    function init() {
      function errorCallback(err) {
        console.log(err);
      }
      commentService.getComments().then(function (comment) {
        vm.comments = comment;
      }, errorCallback);
    }

    function deleteComment(commentId) {
      commentService.deleteComment().then(function (comment) {
        $state.go('admin.comment', {
          reload: true
        });
      }, function (err) {
        console.log(err);
      });
    }
  }


})();
