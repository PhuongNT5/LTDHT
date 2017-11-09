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
      $http.get('localhost:2038/api/Bantins').then(function (res) {
          deferred.resolve(res.data);
        },
        function (err) {
          deferred.reject(err.data);
        });
      return deferred.promise;
    }

    function createBantin(group) {
      var deferred = $q.defer();
      $http.post('http://localhost:2038/api/Bantins', group)
        .then(function (res) {
          deferred.resolve(res.data);
          console.log("success");
        }, function (err) {
          deferred.reject(err.data);
        })
      return deferred.promise;
    }

    function deleteBantin(BantinId) {
      function successCallBack(response) {
        console.log("success");
      }

      function errorCallBack(response) {
        return response;
      }

      return $http.delete('http://localhost:2038/api/Bantins' + BantinId)
        .then(successCallBack, errorCallBack);
    }


    function getBantinById(BantinId) {
      function successCallBack(response) {
        return response;
      }

      function errorCallBack() {
        console.log(error);
      }

      return $http.get('http://localhost:2038/api/Bantins' + BantinId)
        .then(successCallBack, errorCallBack);
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
