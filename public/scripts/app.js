/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

console.log('app.js linked')

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  function AlbumsIndexController () {
    var vm = this;
    vm.newAlbum = {};

    vm.albums = [
  {
    name: 'Coming Home',
    artistName: 'Leon Bridges'
  },
  {
    name: 'Are We There',
    artistName: 'Sharon Van Etten'
  },
  {
    name: 'The Queen is Dead',
    artistName: 'The Smiths'
  }
];
  }
