/*jshint esversion: 6*/

(function () {
  angular.module('app.homepage')
    .controller('HomePageController', HomepageController);

  function HomepageController($http, $state, theloaiService) {
    var vm = this;
    var theloai = [];

    init();

    function init() {
      var a = theloaiService.loadTheloais();
      console.log(a);
    }
  }
})();
