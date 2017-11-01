(function () {
    angular.module('app.theloai')
        .controller('theloaiController', theloaiController);
    theloaiController.$inject = ['$q', '$http', '$state'];
    function theloaiController($q, $http, $state) {
        var vm = this;
        vm.turnActive = turnActive;
        vm.turn = 0;
        vm.theloai = {}

        function turnActive(state) {
            vm.turn = state;
        }
        init();
        function init() {
            // function succeedCallback(unit) {
            //     vm.unit = unit;
            // }

            // function errorCallback(err) {
            //     console.log(err);
            // }
            // unitService.loadUnits().then(function (unit) {
            //     vm.unit = unit;
            // }, errorCallback);
        }
        // function deleteUnit(unitId) {
        //     function succeedCallback(response) {
        //         $state.go('admin.theloai', { reload: true });
        //         unitService.loadUnits().then(function (unit) {
        //             vm.unit = unit;
        //         }, function (err) {
        //             console.log(err);
        //         });
        //     }

        //     function errorCallback(err) {
        //         console.log(err);
        //     }
        //     unitService.getUnitByUnitId(unitId).then(function (unit) {
        //         if (unit.lessons.length == 0) {
        //             unitService.deleteUnit(unitId).then(succeedCallback, errorCallback);
        //         }
        //         else {
        //             toastr.error('Unit exists lessons. must not delete');
        //         }
        //     }, function (err) {
        //         console.log(err);
        //     })
        //     // unitService.deleteUnit(unitId).then(succeedCallback, errorCallback);
        // }

    }

})();