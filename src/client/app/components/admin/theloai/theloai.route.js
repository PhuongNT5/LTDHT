(function () {
    angular.module('app.theloai')
        .config(theloaiConfig);

    function theloaiConfig($stateProvider) {
        $stateProvider
            .state('admin.theloai', {
                url: '/theloai',
                templateUrl: 'app/components/admin/theloai/theloai.html',
                controller: 'theloaiController',
                controllerAs: 'vm'
            });
    }
})()