/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.

AlbumsIndexController.$inject = ['$http'];
function AlbumsIndexController ($http) {
  var vm = this;
  vm.newAlbum = {};

  // vm.newAlbum = {
  //     name: 'Enter an album',
  //     artistName: 'Enter an artist',
  //     genres: 'Add genres'
  // };

  vm.albums = [];

  vm.getAlbums = function () {
    $http({
      method: 'GET',
      url: '/api/albums'
    }).then(function successCallback(response) {
      vm.albums = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  };

  vm.getAlbums();

  vm.createAlbum = function () {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: vm.newAlbum
    }).then(function successCallback(response) {
      console.log(response.data);
      vm.albums.push(response.data);
      vm.newAlbum = {
        name: "",
        artistName: "",
        genres: "",
      }
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  }

}
  // vm.albums = [
  //   {
  //     name: 'Coming Home',
  //     artistName: 'Leon Bridges'
  //   },
  //   {
  //     name: 'Are We There',
  //     artistName: 'Sharon Van Etten'
  //   },
  //   {
  //     name: 'The Queen is Dead',
  //     artistName: 'The Smiths'
  //   }
  // ];
