angular
  .module('tunely')
  .controller('AlbumsIndexController', AlbumsIndexController);

  AlbumsShowController.$inject = ['$http', '$routeParams'];

  function AlbumsShowController ($http, $routeParams) {
    var vm = this;
    vm.newSong = {};

    $http({
      method: 'GET',
      url: '/api/albums/'+$routeParams.id
    }).then(function successCallback(json) {
      vm.album = json.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  }
