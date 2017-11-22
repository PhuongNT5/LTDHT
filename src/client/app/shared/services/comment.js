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
      $http.get('http://localhost:2038/api/Comments').then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    function createComment(group) {
      var deferred = $q.defer();
      $http.post('http://localhost:2038/api/Comments', group)
        .then(function (res) {
          deferred.resolve(res.data);
        }, function (err) {
          deferred.reject(err.data);
        })
      return deferred.promise;
    }

    function deleteComment(commentId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Comments/' + commentId).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }


    function getCommentById(commentId) {
      var deferred = $q.defer();
      $http.get('http://localhost:2038/api/Comments/' + commentId).then(function (res) {
        deferred.resolve(res.data);
      }, function (err) {
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

  }
})();
