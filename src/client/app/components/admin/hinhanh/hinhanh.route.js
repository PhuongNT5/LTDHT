(function () {
    angular.module('app.hinhanh')
        .config(hinhanhConfig);

    function hinhanhConfig($stateProvider) {
        $stateProvider
            .state('admin.hinhanh', {
                url: '/hinhanh',
                templateUrl: 'app/components/admin/hinhanh/hinhanh.html',
                controller: 'hinhanhController',
                controllerAs: 'vm'
            });
    }
})()