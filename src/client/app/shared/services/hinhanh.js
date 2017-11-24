(function () {
  angular.module('app.services')
    .factory('hinhanhService', hinhanhService);

  hinhanhService.$inject = ['$http', '$q', 'appConfigs']

  function hinhanhService($http, $q, appConfigs) {
    var apiUrl = appConfigs.baseApiUrl.concat("hinhanh");

    return {
      getHinhanhs: getHinhanhs,
      createHinhanh: createHinhanh,
      getHinhanhById: getHinhanhById,
      deleteHinhanh: deleteHinhanh
    };

    function getHinhanhs() {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/anhBantins/GetAnhBantins').then(function (res) {
        console.log("success")
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    function createHinhanh(group) {
      var deferred = $q.defer();
      $http.post('http://localhost:2038/api/anhBantins/PostAnhBantin', group)
        .then(function (res) {
          deferred.resolve(res.data);
          console.log("success");
        }, function (err) {
          deferred.reject(err.data);
        })
      return deferred.promise;
    }

    function deleteHinhanh(hinhanhId) {
      function successCallBack(response) {
        console.log("success");
      }

      function errorCallBack(response) {
        return response;
      }

      return $http.get('http://localhost:2038/api/anhBantins/DeleteAnhBantin' + hinhanhId)
        .then(successCallBack, errorCallBack);
    }


    function getHinhanhById(hinhanhId) {
      function successCallBack(response) {
        return response;
      }

      function errorCallBack() {
        console.log(error);
      }

      return $http.get('http://localhost:2038/api/anhBantins/GetAnhBantin' + hinhanhId)
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
