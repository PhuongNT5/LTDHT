(function () {
  angular.module('app.newsmanage')
    .config(newsmanageConfig);

  function newsmanageConfig($stateProvider) {
    $stateProvider
      .state('admin.newsmanage', {
        url: '/newsmanage',
        templateUrl: 'app/components/admin/newsmanage/newsmanage.html',
        controller: 'newsmanageController',
        controllerAs: 'vm'
      });
  }
})()
