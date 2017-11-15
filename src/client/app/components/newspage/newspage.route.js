angular.module('app.newspage')
.config(newspageConfig);

function newspageConfig($stateProvider) {
$stateProvider
    .state('newspage', {
        url: '/theloai/theloai.id',
        templateUrl: 'app/components/newspage/newspage.html',
        controller: 'newspageController',
        controllerAs: 'vm'
    });
}
