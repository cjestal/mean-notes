angular
  .module('notesApp')
  .controller('notesController', notesController);

function notesController($scope, httpService) {
  $scope.formData = {};
  $scope.modal = {};
  $scope.showModal = false;
  $scope.isModal = true;

  //fetch notes
  httpService.get()
    .success(function (data) {
      $scope.notes = data;
    });

  $scope.addNote = function () {
    httpService.add($scope.formData)
      .success(function (data) {
        $scope.formData = {}; //clear
        $scope.notes = data;
      });
  };

  $scope.removeNote = function (id) {
    httpService.remove(id)
      .success(function (data) {
        $scope.notes = data;
        $scope.showModal = false; // in case delete is via modal
      });
  };

  $scope.toggleModal = function (note) {
    $scope.showModal = !$scope.showModal;
    $scope.modal = $scope.showModal ? note : {};
  };

}