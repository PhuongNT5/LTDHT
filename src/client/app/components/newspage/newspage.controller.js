(function () {
  angular.module('app.newspage')
    .controller('newspageController', newspageController);
  newspageController.$inject = ['$q', '$http', '$state'];

  function newspageController() {
    var vm = this;
    vm.theloais = {}
    vm.so = 9;
    init();


  }
})();
