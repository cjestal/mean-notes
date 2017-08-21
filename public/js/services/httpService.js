angular
  .module('notesApp')
  .factory('httpService', httpService);

function httpService($http) {
  return {
    get: function () {
      return $http.get('api/notes');
    },
    add: function (noteData) {
      return $http.post('api/notes', noteData);
    },
    remove: function (id) {
      return $http.delete('api/notes/' + id);
    }
  };
}