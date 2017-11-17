(function () {
  angular.module('app.services')
    .factory('bantinService', bantinService);

  bantinService.$inject = ['$http', '$q', 'appConfigs']

  function bantinService($http, $q, appConfigs) {
    var apiUrl = appConfigs.baseApiUrl.concat("bantin");

    return {
      loadBantins: loadBantins,
      createBantin: createBantin,
      getBantinById: getBantinById,
      deleteBantin: deleteBantin
    };

    function loadBantins() {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Bantins').then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    function createBantin(group) {
      var deferred = $q.defer();
      $http.post('http://localhost:2038/api/Bantins', group)
        .then(function (res) {
          deferred.resolve(res.data);
        }, function (err) {
          deferred.reject(err.data);
        })
      return deferred.promise;
    }

    function deleteBantin(BantinId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Bantins' + BantinId).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }


    function getBantinById(BantinId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Bantins/' + BantinId).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    // function updateGroup(group) {
    //   function successCallBack(response) {
    //     if (response.status === 200) {
    //       var toastrmessage = $translate.instant('GROUP.MESSAGE.UPDATESUCCESS');
    //       toastr.success(toastrmessage, toastrSuccess);
    //       $state.go('start.group-list');
    //     }
    //     return response;
    //   }

    //   function errorCallBack(response) {
    //     utilService.showErrorMessage(response.data.Errors);
    //     return response;
    //   }

    //   return $http.put('api/Groups/Update', group)
    //     .then(successCallBack, errorCallBack);
    // }


  }
})();
