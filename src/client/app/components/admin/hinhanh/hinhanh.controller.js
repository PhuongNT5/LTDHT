(function () {
    angular.module('app.hinhanh')
        .controller('hinhanhController', hinhanhController);
    hinhanhController.$inject = ['$q', '$http', '$state'];
    function hinhanhController($q, $http, $state) {
        var vm = this;
        vm.turnActive = turnActive;
        vm.turn = 0;
        vm.hinhanh = {}

        function turnActive(state) {
            vm.turn = state;
        }
        init();
        function init() {


        }
    }

})();