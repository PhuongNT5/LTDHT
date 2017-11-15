(function () {
  angular.module('app.comment')
    .controller('commentController', commentController);
    commentController.$inject = ['$q', '$http', '$state','commentService'];
  function commentController($q, $http, $state,commentService) {
    var vm = this;
    vm.turnActive = turnActive;
    vm.turn = 0;
    vm.comment = {}

    function turnActive(state) {
      vm.turn = state;
    }
    init();
    function init() {
      function succeedCallback(comment) {
          vm.comments = comment;
      }

      function errorCallback(err) {
          console.log(err);
      }
      commentService.loadcomments().then(function (comment) {
          vm.comments = comment;
      }, errorCallback);
  }
  function deletecomment(commentId) {
      function succeedCallback(response) {
          $state.go('admin.comment', { reload: true });
          commentService.loadcomments().then(function (comment) {
              vm.comments = comment;
          }, function (err) {
              console.log(err);
          });
      }
    }

  }

})();
