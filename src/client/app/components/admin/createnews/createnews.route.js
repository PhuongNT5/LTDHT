(function () {
  angular.module('app.createnews')
    .config(createnewsConfig);

  function createnewsConfig($stateProvider) {
    $stateProvider
      .state('admin.createnews', {
        url: '/createnews',
        templateUrl: 'app/components/admin/createnews/createnews.html',
        controller: 'createnewsController',
        controllerAs: 'vm'
      });
  }
})()
