angular.module('app.theloaidetail')
  .config(theloaidetailConfig);

function theloaidetailConfig($stateProvider) {
  $stateProvider
    .state('layout.theloaidetail', {
      url: '/theloaidetail/:Id',
      templateUrl: 'app/components/theloaidetail/theloaidetail.html',
      controller: 'theloaidetailController',
      controllerAs: 'vm'
    });
}
