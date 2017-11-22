(function () {
  angular.module('app.user')
    .config(userConfig);

  function userConfig($stateProvider) {
    $stateProvider
      .state('admin.user', {
        url: '/user',
        templateUrl: 'app/components/admin/user/user.html',
        controller: 'userController',
        controllerAs: 'vm'
      });
  }
})()
