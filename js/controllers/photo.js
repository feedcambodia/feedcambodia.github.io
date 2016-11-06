//*****************************************************************************************************************
// Copyright 2016 Chanthu Oeur. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Chanthu Oeur.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('PhotoController', ['Resources']);

ctl.controller('PhotoCtrl', function ($scope, $routeParams, $location, PicasaAlbumFeedResource, LogResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  $scope.photos = PicasaAlbumFeedResource('6340765808908508833').Get({
    'kind': 'photo',
    'start-index': 1,
    'max-results': 50
  });
});
