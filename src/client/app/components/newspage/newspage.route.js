angular.module('app.newspage')
.config(newspageConfig);

function newspageConfig($stateProvider) {
$stateProvider
    .state('newspage', {
        url: '',
        templateUrl: 'app/components/newspage/newspage.html',
        controller: 'newspageController',
        controllerAs: 'vm'
    });
}
