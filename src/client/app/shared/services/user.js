(function () {
  angular.module('app.services')
    .factory('userService', userService);

  userService.$inject = ['$http', '$q', 'appConfigs']

  function userService($http, $q, appConfigs) {
    // var apiUrl = appConfigs.baseApiUrl.concat("users");

    return {
      loadUsers: loadUsers,
      createUser: createUser,
      getUserById: getUserById,
      deleteUser: deleteUser
    };

    function loadUsers() {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Users').then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    function createUser(data) {
      var deferred = $q.defer();
      $http.post('http://localhost:2038/api/Users', data).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    };


    function deleteUser(userId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Users/' + userId).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    function getUserById(userId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Users/' + userId).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }
  };
})();
