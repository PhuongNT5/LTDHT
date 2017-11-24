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
      $http.get('http://localhost:2038/api/Theloais/GetTheloais').then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    function createTheloai(group) {
      function successCallBack(response) {
        return response;
      }

      function errorCallBack(response) {
        return response;
      }
      var request = "";
      for (var key in group) {
        request += key + "=" + group[key] + "&";
      }

      request = request.slice(0, request.length - 1);

      return $http.post('http://localhost:2038/api/Theloais/CreateTheloai?' + request).then(successCallBack, errorCallBack);

      // return $http({
      //   method: 'POST',
      //   url: 'http://localhost:2038/api/Theloais/CreateTheloai',
      //   headers: {
      //     'Content-Type': 'application/json; charset=utf-8',
      //     'Access-Control-Allow-Methods': 'Content-Type',
      //   },
      //   data: group
      // }).then(successCallBack, errorCallBack);
    }

    function deleteTheloai(theloaiId) {
      function successCallBack(response) {
        return response;
      }

      function errorCallBack(response) {
        return response;
      }

      return $http.get('http://localhost:2038/api/Theloais/Xoatheloai/' + theloaiId)
        .then(successCallBack, errorCallBack);
    }

    function getTheloaiById(theloaiId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Theloais/GetTheloai/' + theloaiId).then(function (res) {
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
