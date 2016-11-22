//*****************************************************************************************************************
// Copyright 2016 Chanthu Oeur. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Chanthu Oeur.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('FlickrController', ['Resources']);

ctl.controller('FlickrSearchCtrl', function ($scope, $routeParams, $location,
  LogResource, FlickrResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  var sval = localStorage.getItem('flickr_search');
  if (sval && sval.length > 0) {
    $scope.search = sval;
  } else {
    $scope.search = 'Cambodia';
  }
  search();

  function search() {
    localStorage.setItem('flickr_search', $scope.search);
    FlickrResource.Get({
      'text': $scope.search,
      'method': 'flickr.photos.search',
      'extras': 'url_q',
      'sort': 'interestingness-desc',
      'license': '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'
    }).$promise.then(function (data) {
      $scope.info = data.photos.photo;
    });
  }

  //description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags,
  //machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o


  $scope.goSearch = function ($event) {
    var keypressed = $event.keyCode || $event.which;
    if (keypressed == 13) {
      search();
    }
  }

  $scope.clickSearch = function () {
    search();
  }
});

ctl.controller('FlickrImageCtrl', function ($scope, $routeParams, $location, $sce,
  LogResource, FlickrResource, FlickrLicenseResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  FlickrResource.Get({
    'photo_id': $routeParams.id,
    'method': 'flickr.photos.getInfo'
  }).$promise.then(function (data) {
    var i = data.photo;
    $scope.item = i;
    $scope.desc = $sce.trustAsHtml(i.description._content);
    $scope.url = 'https://farm' + i.farm + '.staticflickr.com/' + i.server + '/' + i.id + '_' + i.secret + '_b.jpg';
    FlickrLicenseResource.Get()
    .$promise.then(function (result) {
      var lics = result.license;
      for (var x in lics) {
        if (lics[x].id == i.license) {
          $scope.lic = lics[x];
          break;
        }
      }
    });
  });

});
