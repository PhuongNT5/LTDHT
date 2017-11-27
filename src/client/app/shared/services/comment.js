(function () {
  angular.module('app.services')
    .factory('commentService', commentService);

  commentService.$inject = ['$http', '$q', 'appConfigs']

  function commentService($http, $q, appConfigs) {

    return {
      getComments: getComments,
      createComment: createComment,
      getCommentById: getCommentById,
      deleteComment: deleteComment
    };

    function getComments() {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Comments/GetComments').then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    function createComment(group) {
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

      return $http.post('http://localhost:2038/api/Comments/PostComment?' + request).then(successCallBack, errorCallBack);
    }

    function deleteComment(commentId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Comments/DeleteComment' + commentId).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }


    function getCommentById(commentId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Comments/GetComment' + commentId).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

  }
})();
