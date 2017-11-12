(function () {
  angular.module('app.comment')
    .config(commentConfig);

  function commentConfig($stateProvider) {
    $stateProvider
      .state('admin.comment', {
        url: '/comment',
        templateUrl: 'app/components/admin/comment/comment.html',
        controller: 'commentController',
        controllerAs: 'vm'
      });
  }
})()
