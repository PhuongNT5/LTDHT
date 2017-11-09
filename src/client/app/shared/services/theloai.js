(function () {
  angular.module('app.services')
    .factory('theloaiService', theloaiService);

  theloaiService.$inject = ['$http', '$q', 'appConfigs']

  function theloaiService($http, $q, appConfigs) {
    var apiUrl = appConfigs.baseApiUrl.concat("theloai");

    return {
      getTheloais: getTheloais,
      createTheloai: createTheloai,
      getTheloaiById: getTheloaiById,
      deleteTheloai: deleteTheloai
    };

    function getTheloais() {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Theloais').then(function (res) {
        console.log("success")
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    function createTheloai(group) {
      var deferred = $q.defer();
      $http.post('http://localhost:2038/api/Theloais', group)
        .then(function (res) {
          deferred.resolve(res.data);
          console.log("success");
        }, function (err) {
          deferred.reject(err.data);
        })
      return deferred.promise;
    }

    function deleteTheloai(theloaiId) {
      function successCallBack(response) {
        console.log("success");
      }

      function errorCallBack(response) {
        return response;
      }

      return $http.delete('http://localhost:2038/api/Theloais' + theloaiId)
        .then(successCallBack, errorCallBack);
    }


    function getTheloaiById(theloaiId) {
      function successCallBack(response) {
        return response;
      }

      function errorCallBack() {
        console.log(error);
      }

      return $http.get('http://localhost:2038/api/Theloais' + theloaiId)
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
