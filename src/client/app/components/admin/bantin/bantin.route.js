(function () {
  angular.module('app.bantin')
    .config(bantinConfig);

  function bantinConfig($stateProvider) {
    $stateProvider
      .state('admin.bantin', {
        url: '/bantin',
        templateUrl: 'app/components/admin/bantin/bantin.html',
        controller: 'bantinController',
        controllerAs: 'vm'
      });
  }
})()
