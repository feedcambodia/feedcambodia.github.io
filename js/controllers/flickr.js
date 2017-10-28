//*****************************************************************************************************************
// Copyright 2014 - 2017 Lahuna. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Lahuna.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('FlickrController', ['Resources']);

ctl.controller('FlickrSearchCtrl', function ($scope, $routeParams, $location, $sce,
  LogResource, FlickrResource, FlickrLicenseResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  FlickrLicenseResource.Get()
  .$promise.then(function (result) {
    $scope.licList = result.license;
    var userid = $routeParams.userid;
    var sval = localStorage.getItem('flickr_search');
    if (sval) {
      $scope.search = sval;
    } else {
      if (!userid) {
        $scope.search = 'Cambodia';
      } else {
        $scope.search = '';
      }
    }

    var lic = localStorage.getItem('flickr_license');
    if (lic) {
      $scope.license = lic;
    } else {
      if (!userid) {
        $scope.license = 5;
      } else {
        $scope.license = '';
      }
    }

    search(userid);
  });

  function search(userid) {
    localStorage.setItem('flickr_search', $scope.search);
    localStorage.setItem('flickr_license', $scope.license);
    FlickrResource.Get({
      'text': $scope.search,
      'method': 'flickr.photos.search',
      'extras': 'url_q, license',
      'sort': 'interestingness-desc',
      'license': $scope.license,
      'user_id': userid
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

  $scope.selectLicense = function (id) {
    $scope.license = id;
    search();
  }

  $scope.$watch('license', function () {
    var lics = $scope.licList;
    for (var x in lics) {
      if (lics[x].id == $scope.license) {
        $scope.licText = lics[x].name;
        $scope.licUrl = $sce.trustAsUrl(lics[x].url);
        break;
      }
    }
  });
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
    getUrl(i.id);
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

  function getUrl(id) {
    FlickrResource.Get({
      'photo_id': id,
      'method': 'flickr.photos.getSizes'
    }).$promise.then(function (data) {
      var a = data.sizes.size;
      $scope.url_b = a[a.length-2].source;
      $scope.url_o = a[a.length-1].source;
    });
  }

});