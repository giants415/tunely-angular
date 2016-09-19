angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

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

  vm.deleteSong = function (song) {
    // console.log('delete track', song);
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ $routeParams.id + '/songs/' + song._id
        }).then(function successCallback(json) {
          var index = vm.album.songs.indexOf(song);
          vm.album.songs.splice(index, 1);
        }, function errorCallback(response) {
          console.log('Delete error', response);
        });
      }

  vm.editSong = function (song) {
    $http({
      method: 'PUT',
      url: '/api/albums/'+ $routeParams.id + '/songs/' + song._id,
      data: song
    }).then(function editSuccess(json){
      console.log('song edited');
    });
  }

  vm.addSong = function () {
    $http({
      method: 'POST',
      url: 'api/albums/'+ $routeParams.id + '/songs/',
      data: vm.newSong
    }).then(function songAddSuccess(json) {
      vm.album.songs.push(json.data);
      // vm.newSong = {};
    }, function errorCallback(response) {
      console.log('Error adding track', response);
    });
  }

}
