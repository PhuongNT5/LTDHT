angular.module('app.newspage')
  .config(newspageConfig);

function newspageConfig($stateProvider) {
  $stateProvider
    .state('layout.newspage', {
      url: '/newspage/:Id',
      templateUrl: 'app/components/newspage/newspage.html',
      controller: 'newspageController',
      controllerAs: 'vm'
    });
}
