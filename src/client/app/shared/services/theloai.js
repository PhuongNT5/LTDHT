(function () {
  angular.module('app.services')
    .factory('theloaiService', theloaiService);

  theloaiService.$inject = ['$http', '$q', 'appConfigs']

  function theloaiService($http, $q, appConfigs) {
    var apiUrl = appConfigs.baseApiUrl.concat("theloai");

    return {
      loadTheloais: loadTheloais,
      //   createTheloai: createTheloai,
      //   getTheloaiById: getTheloaiById,
      //   deleteTheloai: deleteTheloai
    };

    function loadTheloais() {

      function successCallBack(response) {
        return response;
      }

      function errorCallBack(response) {
        console.log("error");
        return response;
      }
      return $http.get('http://localhost:2038/api/Bantins')
        .then(successCallBack, errorCallBack);
    }

    // function createGroup(group) {
    //   var deferred = $q.defer();
    //   $http.post('api/Groups/Create', group)
    //     .then(function (res) {
    //       deferred.resolve(res.data);
    //       var toastrmessage = $translate.instant('GROUP.MESSAGE.CREATESUCCESS');
    //       toastr.success(toastrmessage, toastrSuccess);

    //     }, function (err) {
    //       deferred.reject(err.data);
    //     })
    //   return deferred.promise;
    // }

    // function deleteGroup(groupId) {
    //   function successCallBack(response) {
    //     var toastrmessage = $translate.instant('GROUP.MESSAGE.DELETESUCCESS');
    //     toastr.success(toastrmessage, toastrSuccess);
    //   }

    //   function errorCallBack(response) {
    //     return response;
    //   }

    //   return $http.delete('api/Groups/Delete/' + groupId)
    //     .then(successCallBack, errorCallBack);
    // }


    // function getGroupById(groupId) {
    //   function successCallBack(response) {
    //     return response;
    //   }

    //   function errorCallBack() {
    //     var toastrmessage = $translate.instant('GROUP.MESSAGE.GETBYIDFAILED');
    //     toastr.error(toastrmessage, toastrError);
    //   }

    //   return $http.get('api/Groups/GetById/' + groupId)
    //     .then(successCallBack, errorCallBack);
    // }

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

    // function lockStudent(student) {
    //   function successCallBack(response) {
    //     if (response.status === 200) {
    //       $state.go('start.student-list');
    //     }
    //     return response;
    //   }

    //   function errorCallBack(response) {
    //     utilService.showErrorMessage(response.data.Errors);
    //     return response;
    //   }

    //   return $http.put('api/accounts/LockStudent?id=' + student)
    //     .then(successCallBack, errorCallBack);
    // }


  }
})();
